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
const studentGroups = collect(studentsDetails).chunk(2);

console.log(studentGroups.all());

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

// const numbers = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const firstNumber = numbers.get(0);
// const twelfthNumber = numbers.get(11, 10);
//
// console.log(firstNumber); // 1
// console.log(twelfthNumber); // 10

console.log(collect(numbers).all()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

collect().macro('grade', function () {
	return this.map(item => {
		if (item.score >= 70) item.grade = 'A';
		else if (item.score >= 60) item.grade = 'B';
		else if (item.score >= 50) item.grade = 'C';
		else if (item.score >= 45) item.grade = 'D';
		else if (item.score >= 40) item.grade = 'E';
		else item.grade = 'F';

		return item;
	});
});

studentsDetailsCollection.grade();
console.log(studentsDetailsCollection.all());

console.log(studentsDetailsCollection.first((student) => student.score > 40 && student.subject === 'Maths'));
console.log(studentsDetailsCollection.last((student) => student.score < 40 && student.subject === 'Maths'));

const getFirstStudentThatPassesMaths = (studentDetails) => {
	let firstStudentThatPassesMaths = undefined;

	studentDetails.forEach((student) => {
		if (student.subject === 'Maths' && student.score > 40) {
			firstStudentThatPassesMaths = student;
			return false;
		}
	});

	return firstStudentThatPassesMaths;
}

const getLastStudentThatFailsMaths = (studentDetails) => {
	let lastStudentThatFailsMaths = undefined;

	studentDetails.forEach((student) => {
		if (student.subject === 'Maths' && student.score < 40) {
			lastStudentThatFailsMaths = student;
		}
	});

	return lastStudentThatFailsMaths;
}

console.log(getFirstStudentThatPassesMaths(studentsDetails));
console.log(getLastStudentThatFailsMaths(studentsDetails));

const studentsGroupedBySubject = collect(studentsDetails).groupBy('subject');
console.log(studentsGroupedBySubject.all());
