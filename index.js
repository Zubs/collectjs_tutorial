import collect from 'collect.js';

// Create array of students
const students = ['John', 'James', 'Ian', 'David'];

// Create a collection instance from students array
const studentsCollection = collect(students);

// Create array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Get average of numbers
const average = collect(numbers).avg();

console.log(average); // 5.5

// Create array of students details
const studentsDetails = [
	{ name: 'John', score: 40, subject: 'Maths' },
	{ name: 'James', score: 70, subject: 'Science' },
	{ name: 'Ian', score: 50, subject: 'Maths' },
	{ name: 'David', score: 60, subject: 'Science' },
];

// Get average score of students
const averageScore = studentsCollection.avg('score');
console.log(averageScore); // 55

// Group students into groups of 2
const studentGroups = studentsCollection.chunk(2);

// Create collection instance from students details array
const studentsDetailsCollection = collect(studentsDetails);

// Check if students details collection contains 'Physics'
console.log(studentsDetailsCollection.contains('Physics')); // false

// Check if students details collection contains 'Science' as a name
console.log(studentsDetailsCollection.contains('name', 'Science')); // false

// Check if students details collection contains a student with score greater than 50
console.log(studentsDetailsCollection.contains((value, key) => value.score > 50)); // true

// Create collection of prime numbers
const primeNumbers = collect([2, 3, 5, 7]);

console.log(collect(numbers).diff(primeNumbers).all()); // [ 1, 4, 6, 8, 9, 10 ]


