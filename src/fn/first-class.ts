// Function as parameters
// Wrong: hardcoded all
const printList = () => {
    for (let i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        console.log(i)
    }
}
// Wrong: hardcoded behavior
const printList2 = (list: number[]) => {
    for (let i in list) {
        console.log(i)
    }
}

// Right: using a proper params
const printList3 = (action: (list: number[]) => void, list: number[]): void => action(list)
