function constructNote(msg, letters) {
    const lookUp = {};
    for (let i of msg) {
        lookUp[i] = (lookUp[i] || 0) + 1;
    }
    for (let i of letters) {
        if (lookUp[i]) {
            lookUp[i]--;
        }
        if (lookUp[i] === 0) {
            delete lookUp[i];
        }
    }
    return Object.keys(lookUp).length ? false : true;
}
constructNote('aa', 'abc')