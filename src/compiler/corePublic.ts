// WARNING: The script `configurePrerelease.ts` uses a regexp to parse out these values.
// If changing the text in this section, be sure to test `configurePrerelease` too.
export const versionMajorMinor = "5.0";
// The following is baselined as a literal template type without intervention
/** The version of the TypeScript compiler release */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const version: string = `${versionMajorMinor}.0-tsplus.20221226`;

/**
 * Type of objects whose values are all of the same type.
 * The `in` and `for-in` operators can *not* be safely used,
 * since `Object.prototype` may be modified by outside code.
 */
export interface MapLike<T> {
    [index: string]: T;
}

export interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
    " __sortedArrayBrand": any;
}

export interface SortedArray<T> extends Array<T> {
    " __sortedArrayBrand": any;
}

/** Common read methods for ES6 Map/Set. */
export interface ReadonlyCollection<K> {
    readonly size: number;
    has(key: K): boolean;
    keys(): Iterator<K>;
}

/** Common write methods for ES6 Map/Set. */
export interface Collection<K> extends ReadonlyCollection<K> {
    delete(key: K): boolean;
    clear(): void;
}
/** Array that is only intended to be pushed to, never read. */
export interface Push<T> {
    push(...values: T[]): void;
    /** @internal */ readonly length: number;
}

/** @internal */
export type EqualityComparer<T> = (a: T, b: T) => boolean;

/** @internal */
export type Comparer<T> = (a: T, b: T) => Comparison;

/** @internal */
export const enum Comparison {
    LessThan    = -1,
    EqualTo     = 0,
    GreaterThan = 1
}
