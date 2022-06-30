// type CamelCase<S extends string, R extends string = ''> =
//   S extends `${infer First}_${infer Rest}`
//   ? R extends ''
//     ? CamelCase<Lowercase<Rest>, `${R}${Lowercase<First>}`>
//     : CamelCase<Lowercase<Rest>, `${R}${Capitalize<First>}`>
//   : R extends ''
//     ? Lowercase<S>
//   : `${R}${Capitalize<S>}`

type Help<S extends string> = S extends `${infer L}_${infer R}`
  ? `${L}${Help<Capitalize<R>>}`
  : S;

export type CamelCase<S extends string> = Help<Lowercase<S>>;

