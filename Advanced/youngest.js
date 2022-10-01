// Problem Topic: Array of Object
//Find the youngest person from an array of person object
// objectName.propertNname

const persons = [
    { name: 'Mezbah', age: 26 },
    { name: 'Abdullah', age: 24 },
    { name: 'Mutasim', age: 16 },
    { name: 'Ishtiaque', age: 21 },
    { name: 'Sakib', age: 29 },
];

function youngestPerson(instructors) {
    let youngest = instructors[0];

    for (let i = 0; i < instructors.length; i++) {
        let element = instructors[i];
        if (element.age < youngest.age) {
            youngest = element
        }
    }
    return youngest;
}
let result = youngestPerson(persons);
console.log(result);