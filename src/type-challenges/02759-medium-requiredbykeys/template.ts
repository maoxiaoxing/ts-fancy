
type RequiredByKeys<T, K = keyof T> = C<Required<Pick<T, K extends keyof T ? K : never>> & Omit<T, K extends keyof T ? K : never>>
