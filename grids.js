function makeAlphabetical(string) {
    return string.split('').sort().join('')
}

function isAlphabetical(string) {
    return makeAlphabetical(string) === string
}

function gridChallenge(grid) {
    const newGrid = grid.map((row) => makeAlphabetical(row))
    let cols = []

    for (let row = 0; row < newGrid[0].length; row++) {
        let currentCol = []
        for (let col = 0; col < newGrid.length; col++) {
            currentCol.push(newGrid[col][row])
        }
        cols.push(currentCol.join(''))
    }
    const nonAlphabetical = cols.find((col) => !isAlphabetical(col))

    if (nonAlphabetical) {
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log(gridChallenge(['mpxz', 'abcd', 'flmw']))
