/*
  提取出 K 在 T 中所有的元素，进行 Readonly 操作
  然后排出 K 在 T 中的所有的元素
  两者取交集
*/
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>

