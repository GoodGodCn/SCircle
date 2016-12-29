/** 关系类型。注意联系人件可能同时存在多种关系类型，如亲戚加同学，故类名为复数形式。 */
export enum RelationTypes {
  /** 亲戚 */
  qinQi = 1,
  /** 朋友 */
  friend = 2,
  /** 同学 */
  tongXue = 4,
  /** 战友 */
  zhanyYou = 8
}
