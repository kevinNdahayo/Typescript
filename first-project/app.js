var combine = function (input1, input2, NumConverter) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log(result);
};
var combinedAge = combine(30, 26, "as-number");
var combineNames = combine("Max", "Anna", "as-text");
