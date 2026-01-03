function findAllDuplicates(a) {
    const lookUp = {};
    const res = [];
    for (let i of a) {
        if (!lookUp[i]) {
            lookUp[i] = 1;
        } else if (lookUp[i] < 2) {
            lookUp[i]++;
            res.push(i);
        }
    }
    return res;
}
findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1, 3, 3, 3])
