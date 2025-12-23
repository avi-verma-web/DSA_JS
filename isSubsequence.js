function isSubsequence(s1, s2) {
    let i = 0;
    let j = 0;
    while (j < s2.length) {
        if (s1[i] === s2[j]) {
            i++;
        }
        j++;
    }
    return i === s1.length;
}
isSubsequence('hello', 'hello world'); // true
