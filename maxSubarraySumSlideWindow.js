function maxSubarraySum(a, target) {
    if (target > a.length) {
        return null;
    }
    let tempSum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < target; i++) {
        tempSum = tempSum + a[i];
    }
    for (let i = target; i < a.length; i++) {
        tempSum = tempSum + a[i] - a[i - target];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)