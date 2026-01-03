// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

//someRecursive([1,2,3,4], isOdd) // true
//someRecursive([4,6,8,9], isOdd) // true
//someRecursive([4,6,8], isOdd) // false
//someRecursive([4,6,8], val => val > 10); // false

function someRecursive(a, cb) {
    if (a.length === 0) {
        return false;
    }
    if (cb(a[0])) {
        return true;
    }
    return someRecursive(a.slice(1), cb);
}
