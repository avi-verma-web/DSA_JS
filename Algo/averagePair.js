function averagePair(a, target) {
    if (!a.length) return false;
    let start = 0;
    let end = a.length;
    while (start < end) {
        const avg = (a[start] + a[end]) / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
