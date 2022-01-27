//  Working with enums
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR}
const person = {
    name: "Kevin",
    age: 18, 
    hobbies: ["Cooking", "Biking"],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log("Is admin");
}

if(person.role === Role.READ_ONLY) {
    console.log("Is a read-only files")
}

if(person.role === Role.AUTHOR) {
    console.log(" Is an an author !!!")
}