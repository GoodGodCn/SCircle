import { RelationTypes } from './relation-types';
import { RelationDegree } from './relation-degree';

/** 联系人单向关系，包含自己与各联系人的关系。 */
export class Relationship {
  constructor(
    relationId: number,
    /** 主联系人，即位于关系起点的人。 */
    primaryContactId: number,
    /** 从联系人，即位于关系末点的人。 */
    slaverContactId: number,
    /** 关系类型。 */
    types: RelationTypes,
    /** 额外的关系说明。 */
    Description: string,
    /** 关系程度（1-100）。 */
    degree: RelationDegree | number,
    /** 印象。 */
    yinXiang: number,
    /** 称呼。 */
    callName: string,
    /** 消息来源。 */
    infoSource: string,
    /** 消息可靠程度（1-100）。 */
    infoKeKao: number
  ) { }
}
