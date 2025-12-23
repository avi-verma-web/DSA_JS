// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// function power(num, x) {
//     if (x < 1) {
//         return 1;
//     }
//     return num * power(num, x - 1);
// }

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n){
    if (n < 1) {
        return 1;
    }
    return n * factorial(n-1);
}
factorial(7)
