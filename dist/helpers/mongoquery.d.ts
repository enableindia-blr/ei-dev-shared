export type Unpacked<T> = T extends (infer U)[] ? U : T extends ReadonlyArray<infer U> ? U : T;
export type AnyArray<T> = T[] | ReadonlyArray<T>;
export type Condition<T> = T | QuerySelector<T | any> | any;
export type RootQuerySelector<T> = {
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/and/#op._S_and */
    $and?: Array<FilterQuery<T>>;
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/nor/#op._S_nor */
    $nor?: Array<FilterQuery<T>>;
    /** @see https://www.mongodb.com/docs/manual/reference/operator/query/or/#op._S_or */
    $or?: Array<FilterQuery<T>>;
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
export type FilterQuery<T> = {
    [P in keyof T]?: Condition<T[P]>;
} & RootQuerySelector<T> & {
    _id?: Condition<string>;
};
export type QuerySelector<T> = {
    $eq?: T;
    $gt?: T;
    $gte?: T;
    $in?: [T] extends AnyArray<any> ? Unpacked<T>[] : T[];
    $lt?: T;
    $lte?: T;
    $ne?: T;
    $nin?: [T] extends AnyArray<any> ? Unpacked<T>[] : T[];
    $not?: T extends string ? QuerySelector<T> | RegExp : QuerySelector<T>;
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
    $all?: T extends AnyArray<any> ? any[] : never;
    $elemMatch?: T extends AnyArray<any> ? object : never;
    $size?: T extends AnyArray<any> ? number : never;
};
export type TypeToQuery<T> = {
    [P in keyof T]?: T[P] extends object ? T[P] extends AnyArray<any> ? TypeToQuery<Unpacked<T[P]>> : TypeToQuery<T[P]> : T[P] | QuerySelector<T[P]>;
};
//# sourceMappingURL=mongoquery.d.ts.map