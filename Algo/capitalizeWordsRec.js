function capitalizeWords(a) {
    let res = [];
    if (a.length < 2) {
        res.push(a[0].toUpperCase());
        return res;
    }
    return res.concat(a[0].toUpperCase()).concat(capitalizeWords(a.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words);
