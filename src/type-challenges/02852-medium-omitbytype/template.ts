type OmitByType<T, U> = {
  [K in keyof T as ReturnType<() => T[K]> extends U ? never : K]: T[K]
}
