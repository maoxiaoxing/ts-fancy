/*
  遍历 T 属性为 P
  如果 T[P] 和 必要属性 Required<T>[P] 相等，那么就将 P 选出来
*/
// type GetRequired<T> = {
//   [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
// }

type GetRequired<T> = {
  [P in keyof T as T[P] extends Partial<T>[P] ? never : P]: T[P]
}

// type b = {
//   name: string,
//   age?: number
// }
// type a = Pick<b, 'age'>
// type c = {} extends a ? true : false
