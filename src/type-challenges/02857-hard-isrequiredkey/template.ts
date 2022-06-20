import type { Equal, Expect } from '@type-challenges/utils'

// export type IsRequiredKey<T, K extends keyof T> = Equal<{[P in K]: T[P]}, {[P in K]-?: T[P]}>

export type IsRequiredKey<T, K extends keyof T> = Record<K, T[K]> extends T ? true : false

