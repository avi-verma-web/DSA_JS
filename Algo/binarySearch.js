function binarySearch(a, target) {
    let start = 0;
    let end = a.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (a[mid] === target) {
            return mid;
        } else if (a[mid] < target) {
            start = mid + 1;
        } else if (a[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2))
// 1
