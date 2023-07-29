function removeEverySecond(array) {
    return array.filter((_, i) => (i + 1) % 2 == 1)
}

exports.removeEverySecond = removeEverySecond