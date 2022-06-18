type Falsy = 0 | false | [] | Record<string|number|symbol, never> | ''

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true

