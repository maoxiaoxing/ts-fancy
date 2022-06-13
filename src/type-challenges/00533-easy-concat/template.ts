type Concat<T extends unknown[], U extends unknown[]> = 
  T extends [...infer R] 
    ? U extends [...infer S] 
      ? [...R, ...S] : never : never
