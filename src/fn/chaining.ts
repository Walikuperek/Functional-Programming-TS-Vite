export const is = (f: (option: any) => any, option?: any) => {
    return option ? f(option) : null
}

export const pipe = (...fns: any[]) => (value: any) => fns.reduce((currentValue, currentFunction) => currentFunction(currentValue), value)

export const isEven = (x: number) => x % 2 === 0
export const isPositive = (x: number) => x > 0

/** Example of chaining
 * pipe(
 *     isEven,
 *     isPositive
 * )(2) // true
 */


// Work with this to implement proper  with error handling
type Option<T> = {
    isSome: (t: T) => boolean,
    value: T
}

const option: Option<number> = {
    isSome: (t: number) => !!t,
    value: 1
}
console.log(option.isSome(option.value))
