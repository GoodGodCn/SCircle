/** 联系人信息。 */
export class Contact {

  constructor(
    contactId: number,
    contactName: string,
    /** 是否模糊名称。 */
    isMoHu: boolean = false,
    gender: number,
    /** 所在单位或组织。 */
    organizations: string[],
    /** 所属行业。 */
    hangYe: string[],
    /** 当前职业名称。 */
    zhiYe: string[],
    /** 移动电话（包含常用顺序）。 */
    mobilePhone: number[],
    /** 固定电话。 */
    telephone: number[],
    /** 公历生日，年份不确定时记为 0 年。 */
    birthday: Date,
    /** 阴历生日。 */
    lunaBirthday: Date,
    /** 爱好。 */
    hobbit: string[],
    /** 擅长的技能。 */
    jiNeng: string[],
    /** 婚姻状况。 */
    marryStatus: number,
    /** 配偶名称 */
    peiOu:string
  ) { }



}
