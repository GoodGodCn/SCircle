/** 记录电话号码的数据项。 */
export class PhoneItem {

  constructor(
    /** 标题，如手机、座机、家庭、办公、传真等。 */
    public title: string,
    /** 电话号码。 */
    public number: number[],
  ) { }

}
