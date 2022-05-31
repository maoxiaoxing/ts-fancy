// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

type First<T extends any[]> = Pick<T, 0>[0] extends T[number] ? Pick<T, 0>[0] : never
