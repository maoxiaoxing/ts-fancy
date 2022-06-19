type OmitByType<T> = {
  [K in keyof T as ReturnType<() => T[K]> extends U ? never : K]: T[K]
}
