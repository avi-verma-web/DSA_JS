const s1 = 'anagram'
const s2 = 'nagaram'
const isAnagram = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false
    }
    const f1 = {}
    for (const i of s1) {
        f1[i] = (f1[i] || 0) + 1
    }
    for (const letter of s2) {
        if (!(f1[letter])) {
            return false
        } else {
            f1[letter] = f1[letter] - 1
        }
    }
    return true
}
const res = isAnagram(s1, s2)
console.log(res)
