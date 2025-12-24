export type MongoUnpacked<T> = T extends (infer U)[] ? U : T extends ReadonlyArray<infer U> ? U : T;
export type MongoAnyArray<T> = T[] | ReadonlyArray<T>;
export type MongoCondition<T> = T | MongoQuerySelector<T | any> | any;
export type MongoRootQuerySelector<T> = {
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/and/#op._S_and */
    $and?: Array<MongoFilterQuery<T>>;
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/nor/#op._S_nor */
    $nor?: Array<MongoFilterQuery<T>>;
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/or/#op._S_or */
    $or?: Array<MongoFilterQuery<T>>;
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/text */
    $text?: {
        $search: string;
        $language?: string;
        $caseSensitive?: boolean;
        $diacriticSensitive?: boolean;
    };
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/where/#op._S_where */
    $where?: string | Function;
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/comment/#op._S_comment */
    $comment?: string;
    $expr?: Record<string, any>;
};
export type MongoFilterQuery<T> = {
    [P in keyof T]?: MongoCondition<T[P]>;
} & MongoRootQuerySelector<T> & {
    _id?: MongoCondition<string>;
};
export type MongoQuerySelector<T> = MongoRootQuerySelector<T> & {
    $eq?: T;
    $gt?: T;
    $gte?: T;
    $in?: [T] extends MongoAnyArray<any> ? MongoUnpacked<T>[] : T[];
    $lt?: T;
    $lte?: T;
    $ne?: T;
    $nin?: [T] extends MongoAnyArray<any> ? MongoUnpacked<T>[] : T[];
    $not?: T extends string ? MongoQuerySelector<T> | RegExp : MongoQuerySelector<T>;
    /**
     * When `true`, `$exists` matches the documents that contain the field,
     * including documents where the field value is null.
     */
    $exists?: boolean;
    $type?: string | number;
    $expr?: any;
    $jsonSchema?: any;
    $mod?: T extends number ? [number, number] : never;
    $regex?: T extends string ? RegExp | string : never;
    $options?: T extends string ? string : never;
    $geoIntersects?: {
        $geometry: object;
    };
    $geoWithin?: object;
    $near?: object;
    $nearSphere?: object;
    $maxDistance?: number;
    $all?: T extends MongoAnyArray<any> ? any[] : never;
    $elemMatch?: T extends MongoAnyArray<any> ? object : never;
    $size?: T extends MongoAnyArray<any> ? number : never;
};
export type MongoTypeToQuery<T> = MongoQuerySelector<T> | {
    [P in keyof T]?: T[P] extends object ? T[P] extends MongoAnyArray<any> ? MongoTypeToQuery<MongoUnpacked<T[P]>> : MongoTypeToQuery<T[P]> : T[P] | MongoQuerySelector<T[P]>;
};
//# sourceMappingURL=mongoquery.d.ts.map