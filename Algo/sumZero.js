const a = [-4, -3, -2, -1, 0, 1, 2, 5]

const sumZero = (a) => {
    let start = 0;
    let end = a.length - 1;
    while (start < end) {
        const sum = a[start] + a[end];
        if (sum === 0) {
            return [a[start], a[end]]
        } else if (sum > 0) {
            end--
        } else {
            start++
        }
    }
    return []
}
const res = sumZero(a)
console.log(res)
