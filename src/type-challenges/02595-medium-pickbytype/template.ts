type PickByType<T, U> = {
  [P in keyof T as ReturnType<() => T[P]> extends U ? P : never]: T[P]
}
