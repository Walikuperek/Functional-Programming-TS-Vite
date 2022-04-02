// DRY redundancy removal
// Wrong: used forloop
const product = (n: number): number => {
    let product = 1
    for (let i = 1; i < n; i++) {
        product *= i
    }
    return product
}
product(5)

// Wrong: used forloop once again
const sum = (n: number): number => {
    let sum = 0
    for (let i = 1; i < n; i++) {
        sum += i
    }
    return sum
}
sum(5)

// Good example
export const forLoop = (acc: number, f: (i: number, acc: number) => number, n: number): number => {
    for (let i = 1; i < n; i++) {
        acc = f(i, acc)
    }
    return acc
}

export const mltpy = (n: number): number => forLoop(1, (i, acc) => acc * i, n)
export const sum2 = (n: number): number => forLoop(0, (i, acc) => acc + i, n)
