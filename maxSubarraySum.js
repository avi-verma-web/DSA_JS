const maxSubarraySum = (a, count) => {
    if (a.length < count)
        return null;
    let maxSum = -Infinity;
    for (let i = 0; i <= (a.length - count); i++) {
        let arySum = 0;
        for (let j = i; j < i + count; j++) {
            arySum = arySum + a[j]
        }
        if (arySum > maxSum) {
            maxSum = arySum
        }
    }
    return maxSum;
}

const a = [1, 2, 3, 2, 8, 1, 5];
const count = 3;
const res = maxSubarraySum(a, count)
console.log(res)
