// import { PhoneItem } from './phoneItem';

// 提示：用于逻辑运算或精确分析的数据严格限制类型，用于检索的数据使用文本更容易分析。

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
    /** 事业情况（可描述：做什么的什么头衔，用于精细搜索）。 */
    public careers: string,
    /** 行业标签（如工业、商业、信息行业等，用于粗略搜索）。 */
    public industries: string,
    /** 所在单位或组织。 */
    public organizations: string,
    /** 爱好。 */
    public interests: string,
    /** 技能（可说明擅长或一般）。 */
    public skills: string,
    /** 婚姻状况。 */
    public maritalStatus: string,
    /** 家庭成员（格式：“关系：名称”，如需记录详情则建立关系）。 */
    public familyMembers: string,
    /** 家庭情况描述。 */
    public familySituation: string,
    /** 电话（包含常用顺序）。 【暂时用字符串数组，格式“标题:内容”】*/
    public telephones: string[],
    /** 网络账号。 【暂时用字符串数组，格式“标题:内容”】*/
    public networkAccount: string[],
    /** 公历生日，年份不确定时记为 0 年。 */
    public birthday: Date,
    /** 阴历生日。 */
    public lunaBirthday: string,
    /** 备注。 */
    public remarts: string
  ) { }

}
