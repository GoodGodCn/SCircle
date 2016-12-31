/**
 * 关系类型。
 * 注意联系人间可并存多种关系类型，如亲戚加同学，故类名为复数形式，且值可进行位运算。
 */
export enum RelationTypes {
  /** 家人。 */
  family = 1,
  /** 亲戚。 */
  relative = 2,
  /** 战友。 */
  comrades = 4,
  /** 同学。 */
  classmate = 8,
  /** 朋友。 */
  friend = 16,
  /** 同事。 */
  colleague = 32,
}
