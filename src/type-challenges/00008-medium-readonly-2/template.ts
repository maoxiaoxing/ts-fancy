/*
  提取出 K 在 T 中所有的元素，进行 Readonly 操作
  然后排出 K 在 T 中的所有的元素
  两者取交集
*/
// export type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>

export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyExclude<T, K> = T extends K ? never : T

type MyOmit<T, K> = {
  [P in MyExclude<keyof T, K>]: T[P]
}

export type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<MyPick<T, K>> & MyOmit<T, K>

