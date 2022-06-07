type Replace<S extends string, From extends string, To extends string> = 
  From extends '' 
    ? S : S extends `${infer Front}${infer From}${infer Behind}`
        ? `${Front}${To}${Behind}` : S
