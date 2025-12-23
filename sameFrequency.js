const sameFrequency = (n1, n2) => {
    const s1 = String(n1)
    const s2 = String(n2)
    if (s1.length !== s2.length) {
        return false
    }
    const lookUp = {}
    for (let i of s1) {
        lookUp[i] = (lookUp[i] || 0) + 1;
    }
    for (let i of s2) {
        if (!lookUp[i]) {
            return false
        } else {
            lookUp[i] = lookUp[i] - 1
        }
    }
    return true
}
