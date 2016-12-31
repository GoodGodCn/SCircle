import { Injectable, Pipe } from '@angular/core';

/**
 * 枚举管道，用于在界面上将枚举值转换为枚举名称。
 */
@Pipe({
  name: 'enum'
})
@Injectable()
export class EnumPipe {
  /** 检索枚举名称的存储库。 */
  private store: { [enumType: string]: string[] } = {
    RelationTypes: ['家人', '亲戚', '战友', '同学', '朋友', '同事']
  };

  /** 将枚举值转换为枚举名称。 */
  transform(value: number, typeName: string): string {
    let result: string = '';
    if (typeName === 'RelationTypes') {
      // 将值转为二进制数组并反转顺序。
      let bitArray = value.toString(2).split('').reverse();
      // 按顺序取对应二进制为 '1' 的项然后串联。
      result = this.store[typeName]
        .filter((value, index) => index < bitArray.length && bitArray[index] === '1')
        .join(',');
    } else {
      result = this.store[typeName][value - 1];
    }
    return result;
  }
}
