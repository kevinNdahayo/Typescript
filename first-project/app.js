//  Functions with typescript
function add(n1, n2) {
    return n1 + n2;
}
function concatStrings(n1, n2) {
    return n1.toString() + n2.toString();
}
var resultConcatination = concatStrings(2, 3);
var result = add(2, 3);
console.log(resultConcatination);
console.log(result);
function printResult(num) {
    console.log('Result is ', num);
}
