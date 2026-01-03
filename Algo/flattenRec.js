function flatten(a) {
    let res = [];
    const helper = a => {
        if (a.length < 2) {
            if (!Array.isArray(a[0])) {
                res.push(a[0]);
                return;
            } else {
                helper(a[0]);
                return;
            }
        } else {
            if (!Array.isArray(a[0])) {
                res.push(a[0]);
                helper(a.slice(1));
                return;

            } else {
                helper(a[0]);
                helper(a.slice(1));
                return;
            }
        }
    }
    helper(a);
    return res;
}

//flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]

// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
//flatten([[1],[2],[3]]) // [1,2,3]
//flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
// [1,2,3
