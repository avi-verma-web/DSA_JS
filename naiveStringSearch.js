function naiveStringSearch(large, small) {
    let count = 0;
    let j = 0;
    for (let i = 0; i < large.length; i++) {
        if (large[i] === small[j]) {
            j++;
            if (j === small.length) {
                count++;
                j = 0;
            }
        } else {
            j = 0;
        }
    }
    return count;
}

naiveStringSearch('wowomgwowomg', 'omg')
