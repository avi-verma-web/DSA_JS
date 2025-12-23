// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
const productOfArray = (a) => {
    if (a.length < 1) {
        return 1;
    }
    return a[0] * productOfArray(a.slice(1));
}
productOfArray([1,2,3,10])