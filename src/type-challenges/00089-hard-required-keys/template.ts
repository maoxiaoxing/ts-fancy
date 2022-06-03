type MyGetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}
export type RequiredKeys<T> = keyof MyGetRequired<T>

// type a = RequiredKeys<{ a: number; b?: string }>
// type b = keyof { a: number; b?: string }
