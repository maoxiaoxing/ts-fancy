
type C<T> = Pick<T, keyof T>
type PartialByKeys<T, K = keyof T> = 
  C<Partial<Pick<T, K extends keyof T ? K : never>> & Omit<T, K extends keyof T ? K : never>>

