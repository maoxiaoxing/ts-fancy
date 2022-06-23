// M => minuend, S => subtrahend

export type ToArray<T extends number, Arr extends number[] = []> = 
  Arr['length'] extends T
    ? Arr : ToArray<T, [...Arr, any]>
export type Subtract<M extends number, S extends number> =
  ToArray<M> extends [...ToArray<S>, ...infer R]
    ? R['length'] : never
