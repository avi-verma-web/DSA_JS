function findPair(a, target) {
    a.sort( (n1, n2) => n1 - n2);
    let start = 0;
    let end = a.length - 1;
    const difftarget = Math.abs(target)
    while (start < end) {
        const diff = Math.abs(a[start] - a[end]);
        if (diff === target) {
            return true;
        } else if (diff < target) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
const res = findPair([],1) // true


console.log(res)
