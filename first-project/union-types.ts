//  Union type in typescript

const combine = (input1: number | string , input2: number | string ) => {
    let result: any;
        if (typeof input1 === "number" && typeof input2 === "number") {
            result = input1 + input2;
        } else {
            result = input1.toString() + input2.toString();
        }
        return result;
}

const combinedAge = combine(30, 26);
console.log(combinedAge);

const combineNames = combine("Max", "Anna")
console.log(combineNames)