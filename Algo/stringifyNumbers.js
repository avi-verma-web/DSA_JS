function stringifyNumbers(o) {
    let res = {};
    for (let key in o) {
        const val = o[key];
        if (typeof val === 'number') {
            res[key] = String(val);
        } else if(val && Object.keys(val).length) {
            res[key] = stringifyNumbers(val);
        } else {
            res[key] = val;
        }
    }
    return res;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
