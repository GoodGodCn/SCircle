/** 联系人信息。 */
export class Contact {

  constructor(
    /** 联系人标识。 */
    contactId: number,
    /** 联系人名称。 */
    contactName: string,
    /** 表示名称是模糊或不明确的。 */
    uncertainName: boolean = false,
    /** 性别。 */
    gender: number,
    /** 所在单位或组织。 */
    organizations: string[],
    /** 所属行业（如工业、商业、信息行业等）。 */
    industry: string[],
    /** 当前职业名称（如工人、商人、设计师等）。 */
    occupation: string[],
    /** 移动电话（包含常用顺序）。 */
    mobilePhone: number[],
    /** 固定电话。 */
    telephone: number[],
    /** 公历生日，年份不确定时记为 0 年。 */
    birthday: Date,
    /** 阴历生日。 */
    lunaBirthday: string,
    /** 爱好。 */
    interests: string[],
    /** 擅长的技能。 */
    skills: string[],
    /** 婚姻状况。 */
    maritalStatus: number,
    /** 配偶名称（如需记录详情则建立关系）。 */
    spouseName: string
  ) { }

}
