/** 联系人信息。 */
export class Contact {

  constructor(
    /** 联系人标识。 */
    public contactId: number,
    /** 联系人名称。 */
    public contactName: string,
    /** 表示名称是模糊或不明确的。 */
    public uncertainName: boolean,
    /** 性别。 */
    public gender: number,
    /** 所在单位或组织。 */
    public organizations: string[],
    /** 所属行业（如工业、商业、信息行业等）。 */
    public industry: string[],
    /** 当前职业名称（如工人、商人、设计师等）。 */
    public occupation: string[],
    /** 移动电话（包含常用顺序）。 */
    public mobilePhone: number[],
    /** 固定电话。 */
    public telephone: number[],
    /** 公历生日，年份不确定时记为 0 年。 */
    public birthday: Date,
    /** 阴历生日。 */
    public lunaBirthday: string,
    /** 爱好。 */
    public interests: string[],
    /** 擅长的技能。 */
    public skills: string[],
    /** 婚姻状况。 */
    public maritalStatus: number,
    /** 配偶名称（如需记录详情则建立关系）。 */
    public spouseName: string
  ) { }

}
