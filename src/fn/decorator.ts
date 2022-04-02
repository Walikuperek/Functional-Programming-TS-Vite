const isEven = (n: number) => n % 2 === 0

export const log = (arg: any) => {
    console.log('logged', arg)
    return arg
}

export const logIsEven = (n: number, ): boolean => log(isEven(log(n)))


