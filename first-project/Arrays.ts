const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "kevin",
    age: 18,
    hobbies: ['sports', 'cooking'],
    role: [2, 'programmer']
}
person.role.push("Admin");

console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby)
} 