import type { Equal, Expect } from '@type-challenges/utils'

type ToUnionOfFunction<T> = T extends any ? (x: T) => any : never;

export type UnionToIntersection<U> = ToUnionOfFunction<U> extends (a: infer U) => any ? U : never

type F = (a: string) => void
type A = (b: number) => void
type T<U> = U

type f = 'foo' | 42 | true
type s = Equal<f, T<'foo'> | T<42> | T<true>>

type b = ToUnionOfFunction<'ff'| 1>
type C = UnionToIntersection<f>
type a = Equal<C, 'foo' & 42 & true>


