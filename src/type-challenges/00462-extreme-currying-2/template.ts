// export type CurriedFn<Fn, AllArgs extends unknown[] = []> = Fn extends (...args: infer Args) => infer F ?
//   (...arg: InArgs) => [...AllArgs, ...InArgs]['length'] extends Args['length'] ? 
//     ReturnType<Fn> : CurriedFn<Fn, [...AllArgs, ...InArgs]> : never

// declare function DynamicParamsCurrying<Fn>(fn: Fn): CurriedFn<Fn>

// const curry = (fn) => {
//   return function curriedFn(...args) {
//     if (args.length < fn.length) {
//       return function (...rest) {
//         return curriedFn(...args, ...rest)
//       }
//     } else {
//       return fn(...args)
//     }
//   }
// }

// const add = (a, b, c) => {
//   return a+b+c
// }
// const curriedAdd = curry(add)
