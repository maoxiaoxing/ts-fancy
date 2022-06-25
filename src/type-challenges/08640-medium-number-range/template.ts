export type ToArray<T extends number, Arr extends number[] = []> = 
  Arr['length'] extends T
    ? Arr : ToArray<T, [...Arr, any]>

export type Add<T extends number, U extends number> = 
  [...ToArray<T>, ...ToArray<U>]['length']

export type Subtract<M extends number, S extends number> =
  ToArray<M> extends [...ToArray<S>, ...infer R]
    ? R['length'] : never

// type Tool<L extends number, H extends number, Arr extends any[] = [...ToArray<L>], U = never> = 
//   Subtract<H, L> extends Arr['length']
//     ? H | U : Tool<L, H, Arr['length'] extends L ? [...Arr, unknown] : ToArray<L>, U | Arr['length']>
// export type NumberRange<L extends number, H extends number> = Tool<L, H>

export type NumberRange<L extends number, H extends number, R extends number[] = [], P extends any[] = []> = P['length'] extends H 
    ? R[number] | H : NumberRange<L, H, P['length'] extends L ? [...R, L] : R['length'] extends 0 ? R : [...R, P['length']], [...P, 1]>


