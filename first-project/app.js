//  Working with enums
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Kevin",
    age: 18,
    hobbies: ["Cooking", "Biking"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("Is admin");
}
if (person.role === Role.READ_ONLY) {
    console.log("Is a read-only files");
}
if (person.role === Role.AUTHOR) {
    console.log(" Is an an author !!!");
}
