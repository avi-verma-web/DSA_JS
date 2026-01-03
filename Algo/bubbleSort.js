function bubbleSort(a) {
    for (let i = a.length - 1; i > 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j],a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}
let a = [5, 3, 7, 2, 10, 1]
bubbleSort(a)
