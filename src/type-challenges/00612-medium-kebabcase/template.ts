
// type KebabCase<S extends string> = 
// S extends `${infer L1}${infer L2}${infer R}` ? (
//  `${Lowercase<L1>}${L2 extends Lowercase<L2> ? '' : '-'}${KebabCase<`${Lowercase<L2>}${R}`>}`
// ) : S;

// type KebabCase<S extends string, U extends string = ''> = S extends `${infer F}${infer Rest}` 
// ? F extends Lowercase<F> 
//   ? KebabCase<Rest, `${U}${F}`>
//   : U extends '' 
//     ? KebabCase<Rest, Lowercase<F>>
//     : KebabCase<Rest, `${U}-${Lowercase<F>}`>
// : U

type KebabCase<S extends string> = 
  S extends `${infer F}${infer R}`
    ? Uncapitalize<R> extends R
      ? `${Lowercase<F>}${KebabCase<R>}`
        : `${Lowercase<F>}-${KebabCase<R>}`
          : S


