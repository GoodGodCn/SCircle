import { Component, ViewEncapsulation, EventEmitter, Input, Output, Optional, ViewChildren, QueryList } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { MdInputDirective } from '@angular/material';

/** 值改变回调方法接口。 */
export interface ChangeCallback {
  (value: any): void;
}

/** 触摸回调方法接口。 */
export interface TouchedCallback {
  (): void;
}

/**
 * 输入组件数组。
 * 各个输入框默认横向排列，如需改变显示样式，可以直接指定样式。
 * 例如：
 * ```html
 * <input-array fxFlex="auto" fxLayout="column"></input-array>
 * ```
 * 或者
 * ```html
 * <input-array class="vertical"></input-array>
 * ```
 */
@Component({
  selector: 'input-array',
  templateUrl: 'input-array.html',
  encapsulation: ViewEncapsulation.None
})
export class InputArrayComponent implements ControlValueAccessor {
  /** ControlValueAccessor 的值改变回调方法。 */
  private onChange: ChangeCallback = value => { console.warn('尚未注册 onChange 方法。', value); };

  /** ControlValueAccessor 的触摸回调方法。 */
  private onTouched: TouchedCallback = () => { console.warn('尚未注册 onTouched 方法。'); };

  private _value: string[] = [];

  /** 指示控件的禁用状态（自动通过 ControlValueAccessor 接口设置）。 */
  protected disabled: boolean = false;

  /** 视图中的所有 MdInput 指令。 */
  @ViewChildren(MdInputDirective)
  protected mdInputDirectives: QueryList<MdInputDirective>;

  /** value 双向绑定的输入接口。 */
  @Input()
  public set value(value: string[]) {
    this._value = value || [];
  }
  public get value(): string[] {
    return this._value;
  }

  /** value 双向绑定的输出接口。 */
  @Output()
  public valueChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output()
  public blur: EventEmitter<void> = new EventEmitter<void>();

  /** 主输入框的标题。 */
  @Input()
  public placeholder: string;

  /** 增加按钮文本。 */
  @Input()
  public addButtonText: string = '+ 更多';

  public constructor(
    @Optional() protected ngControl: NgControl
  ) {
    // 因使用方式不同，ngControl 不一定存在。
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngAfterViewInit(): void {
    // 输入框发生变化时，将焦点设定到最后一个。
    this.mdInputDirectives.changes.subscribe((directives: QueryList<MdInputDirective>) => {
      // 使用数据模型检查长度更准确。
      if (this.value.length > 0) {
        // 使用异步以免报错。
        Promise.resolve().then(() => {
          directives.toArray()[this.value.length - 1].focus();
        });
      }
    });
  }

  /** 触发值改变事件。 */
  private emitValueChangeEvent(value: string[]): void {
    this.onChange(value);
    this.valueChange.emit(value);
  }

  /** 触发触摸事件。 */
  private emitTouchedEvent(): void {
    this.onTouched();
  }

  /** ngFor 的自定义跟踪方法，可防止频繁重建元素。 */
  protected customTrackBy(index: number, value: string): any {
    return index;
  }

  protected onItemBlur(value: string, index: number): void {
    // 失去焦点时，若无值则删除该项。
    if (!value) {
      this.value.splice(index, 1);
    }

    // 触发值变动事件。
    this.emitValueChangeEvent(this.value);

    // 触发触摸事件（参考 Ionic 绑定到 blur）。
    this.emitTouchedEvent();
  }

  /** 在数组末尾增加一项。 */
  protected appendItem(): void {
    this.value.push(null);
  }

  // --------------------------------------------------
  // 以下为 ControlValueAccessor 接口成员。
  // --------------------------------------------------

  /**
   * Write a new value to the element.
   */
  public writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Set the function to be called when the control receives a change event.
   */
  public registerOnChange(onChangeCallback: ChangeCallback): void {
    this.onChange = onChangeCallback;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   */
  public registerOnTouched(onTouchedCallback: TouchedCallback): void {
    this.onTouched = onTouchedCallback;
  }

  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
