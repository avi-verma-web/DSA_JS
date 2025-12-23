const a = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
const countUniqueValues = a => {
    if(!a.length) return 0;
    let count = 1;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] !== a[i + 1]) {
            count++;
        }
    }
    return count;
}
const res = countUniqueValues([])
console.log(res)