// type If<C extends boolean, T, F> = true extends C ? T : F

type If<C extends boolean, T, F> = C extends true ? T : F


