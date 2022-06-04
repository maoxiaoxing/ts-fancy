type reg = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${reg}${infer Right}` ? TrimLeft<Right> : S
