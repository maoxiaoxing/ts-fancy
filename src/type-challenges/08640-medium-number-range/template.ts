export type ToArray<T extends number, Arr extends number[] = []> = 
  Arr['length'] extends T
    ? Arr : ToArray<T, [...Arr, any]>

export type Add<T extends number, U extends number> = 
  [...ToArray<T>, ...ToArray<U>]['length']

export type Subtract<M extends number, S extends number> =
  ToArray<M> extends [...ToArray<S>, ...infer R]
    ? R['length'] : never

export type A<L extends number, H extends number, R extends number[] = []> = 
  [...R, [...ToArray<H>]['length']]['length'] extends Subtract<H, L>
    ? [...R, [...ToArray<H>]['length']] : A<L, Subtract<H, 1>, R>
export type NumberRange<L extends number, H extends number> = [...A<L, H>][number]

type a = [1, 2] as const
type b = typeof a
