type ReplaceAll<S extends string, From extends string, To extends string> = 
  S extends ''
    ? S : S extends `${infer Front}${From}${infer Behind}`
      ? From extends '' 
        ? S : `${Front}${To}${ReplaceAll<Behind, From, To>}` : S


