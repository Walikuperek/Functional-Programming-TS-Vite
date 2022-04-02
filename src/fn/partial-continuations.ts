// We will create our new Exception
class WrongArgsException extends Error {
  constructor(message: string) {
    super(message);
  }
}

/** Wrong, didn't let dev decide what to do on wrong args */
// const wrongDivideFn = (top: number, bottom: number): number | WrongArgsException => {
//     if (bottom === 0) {
//         throw new WrongArgsException('Cannot divide by zero');
//     } else {
//         return top / bottom;
//     }
// }

/** Good solution for divide fn which is extensible */
export const divide = (top: number, bottom: number, ifZero: () => void, ifSuccess: (val: number) => number) => {
    return bottom === 0
        ? ifZero()
        : ifSuccess(top / bottom);
}

const isZero = (): WrongArgsException => new WrongArgsException('Cannot divide by zero')
const isSuccess = (val: number): number => val

// Proper solution for divide fn with isZero and isSuccess
export const divide1 = (top: number, bottom: number) => divide(top, bottom, isZero, isSuccess);
divide1(1, 0); // WrongArgsException: Cannot divide by zero
divide1(1, 1); // 1