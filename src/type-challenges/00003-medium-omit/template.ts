type MyExclude<T, K> = T extends K ? never : T
type MyOmit<T, K extends T> = {
  [P in MyExclude<keyof T, K>]: T[P]
}


// type a = MyExclude<'a', 'c'>
