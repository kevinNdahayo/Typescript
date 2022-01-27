//  Functions with typescript

function add(n1: number , n2: number): number{
    return n1 + n2;
}


function concatStrings(n1: number , n2: number ): string {
    return n1.toString() + n2.toString();
}
const resultConcatination = concatStrings(2,3)
const result = add(2,3);
console.log(resultConcatination);
console.log(result);

function printResult(num: number): void {
    console.log('Result is ', num);
}