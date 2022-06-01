type CurriedFn<Fn> = Fn extends (...args: infer Args) => infer F ? 
  Args extends [infer First, ... infer Rest] ? 
    (arg: First) => CurriedFn<(...rest: Rest) => F> : ReturnType<Fn> : never

declare function Currying<Fn>(fn: Fn): CurriedFn<Fn>

const curry = (fn) => {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function (...rest) {
        return curriedFn(...args, ...rest)
      }
    } else {
      return fn(...args)
    }
  }
}

const add = (a, b, c) => {
  return a+b+c
}
const curriedAdd = curry(add)

