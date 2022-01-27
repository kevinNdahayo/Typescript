// Using aliases in typescript
type combinedTypes = number | string ;
type convertionType =  "as-number" | "as-text";
const combine = (
    input1: combinedTypes,
     input2: combinedTypes ,
      NumConverter:convertionType
 ) => {
    let result: any;
        if (typeof input1 === "number" && typeof input2 === "number") {
            result = +input1 + +input2;
        } else {
            result = input1.toString() + input2.toString();
        }

        console.log(result);
        
}


const combinedAge = combine(30, 26, "as-number");
const combineNames = combine("Max", "Anna", "as-text");
