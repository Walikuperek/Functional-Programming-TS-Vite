type OrderLine = { qty: number; total: number}

export const orderLines = [
    {qty: 2, total: 100},
    {qty: 3, total: 200},
    {qty: 4, total: 300},
    {qty: 5, total: 400},
]

// Monoid
const addPair = (a: OrderLine, b: OrderLine): OrderLine => ({
    qty: a.qty + b.qty,
    total: a.total + b.total,
})

export const reduceOrderLines = (orderLines: OrderLine[]) => orderLines.reduce(addPair, {qty: 0, total: 0})


/**
 * ----------------------------------------------------------
 *  List           Details of all the items in the cart
 *                 <li>
 *  -              <li>
 *  -              <li>
 *  ...            ...
 *
 *                 SUMMARY: qty, total
 * ----------------------------------------------------------
 */