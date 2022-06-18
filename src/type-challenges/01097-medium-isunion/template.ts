type IsUnion<T, T2 = T> = [T] extends [never] ? false : T extends T2 ? [T2] extends [T] ? false : true : never


