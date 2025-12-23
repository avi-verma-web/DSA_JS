function nestedEvenSum(o) {
    let sum = 0;
    for (let key in o) {
        if (typeof o[key] === 'number' && o[key] % 2 === 0) {
            sum = sum + o[key];
        } else if (typeof o[key] === 'object') {
            sum = sum + nestedEvenSum(o[key]);
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {
        b: 2,
        bb: {
            b: 3,
            bb: {
                b: 2
            }
        }
    },
    c: {
        c: {
            c: 2
        },
        cc: 'ball',
        ccc: 5
    },
    d: 1,
    e: {
        e: {
            e: 2
        },
        ee: 'car'
    }
};

//nestedEvenSum(obj1);
// 6
//nestedEvenSum(obj2);
// 10
nestedEvenSum({})