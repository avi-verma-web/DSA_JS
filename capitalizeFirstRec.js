function capitalizeFirst(a) {
    const result = [];
    if (a.length < 1) {
        return result;
    }
    const firstWord = a[0];
    const capitalWord = firstWord[0].toUpperCase() + firstWord.slice(1);
    return result.concat(capitalWord).concat(capitalizeFirst(a.slice(1)));
}

capitalizeFirst(['car', 'taco', 'banana']);
// ['Car','Taco','Banana']
