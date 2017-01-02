import { RelationTypes } from './relation-types';
import { RelationDegree } from './relation-degree';

/** 联系人单向关系，包含自己与各联系人的关系。 */
export class Relationship {

  constructor(
    /** 关系标识。 */
    public relationId: number,
    /** 主联系人，即位于关系起点的人。 */
    public primaryContactId: number,
    /** 从联系人，即位于关系末点的人。 */
    public slaverContactId: number,
    /** 关系类型。 */
    public types: RelationTypes,
    /** 额外的关系说明。 */
    public description: string,
    /** 关系程度（1-100）。 */
    public degree: RelationDegree | number,
    /** 印象。 */
    public impression: number,
    /** 称呼。 */
    public callName: string,
    /** 消息来源。 */
    public dataFrom: string,
    /** 消息可靠程度（1%-100%）。 */
    public reliability: number
  ) { }

}
