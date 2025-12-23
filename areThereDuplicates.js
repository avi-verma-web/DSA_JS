function areThereDuplicates(...a) {
    a.sort( (i, j) => {
        if (typeof i === 'number' && typeof j === 'number') {
            return i - j;
        }
        return String(i).localeCompare(String(j))
    }
    )
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] === a[i + 1]) {
            return true
        }
    }
    return false
}
areThereDuplicates('a', 'b', 'c', 'a')
