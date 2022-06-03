
type MyGetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}

// type GetOptional<T> = Omit<T, keyof MyGetRequired<T>>
type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P]
}

