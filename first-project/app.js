var person = {
    name: "kevin",
    age: 18,
    hobbies: ['sports', 'cooking'],
    role: [2, 'programmer']
};
person.role.push("Admin");
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
