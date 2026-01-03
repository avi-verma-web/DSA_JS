function minSubArrayLen(a, target) {
    let start = 0;
    let end = 0;
    let sum = a[start];
    while (end < a.length) {
        if (sum < target) {
            end++;
            sum = sum + a[end]
        } else if (sum > target) {
            start++;
            sum = sum - a[start]
        } else if (sum === target) {
            return end - start + 1;
        }
    }
    return 0;
}
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
