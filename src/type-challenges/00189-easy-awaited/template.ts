// type MyAwaited = any
type MyReAwaited<T> = T extends Promise<infer U> ? MyReAwaited<U> : T
type MyAwaited<T extends Promise<unknown>> = MyReAwaited<T>

// type a  = Awaited<Promise<1>>
