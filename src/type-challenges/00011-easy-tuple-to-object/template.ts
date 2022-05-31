
// type TupleToObject<T extends readonly (number|string)[]> = {
//   [P in T[number]]: P
// }

type TupleToObject<T extends Readonly<(number|string)[]>> = {
  [P in T[number]]: P
}
