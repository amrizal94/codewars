const snail = array => {
    const middle = array.slice(1, -1).map(row => row.slice(1, -1))
    return [
        // right
        array[0],
        // down
        array.slice(1).map(row => row[row.length - 1]),
        // left
        array[array.length - 1].slice(1, -1).reverse(),
        // up
        array.slice(1).reverse().map(row => row[0]),
        // recrusive
        middle.length > 0 ? snail(middle) : []
    ].flat()

}

console.log(snail(
    [
        [1, 2, 3, 4, 5],
        [12, 13, 14, 15, 6],
        [11, 10, 9, 8, 7],
    ]))
console.log(snail(
    [
        [1],
    ]))