function collectStrings(o) {
    let res = [];
    for (let key in o) {
        const val = o[key];
        if (typeof val === 'string') {
            res = res.concat(val);
        } else if(val && Object.keys(val).length) {
            res = res.concat(collectStrings(val));
        }
    }
    return res;
}
const m = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(m)
// ["foo", "bar", "baz"])
