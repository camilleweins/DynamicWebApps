// Add some students to the Array of Objects
var students = [
					{
						firstName: 'Jason',
						lastName: 'Sigal',
						present: true
					},
					{
						firstName: 'Ali',
						lastName: 'Fung',
						present: false
					},
					{
						firstName: 'Camille',
						lastName: 'Weins',
						present: true
					}
];

/**
 * Turns student attendance into a string,
 * then passes that string to a callback function.
 * 
 * @param {String} firstName
 * @param {String} lastName
 * @param {Boolean} present   
 * @param {Function} callback
 */
function takeAttendance(firstName, lastName, present, callback) {

	var presentOrAbsent;
	if (present) {
		presentOrAbsent = 'present';
	} else {
		presentOrAbsent = 'absent';
	}

	var name = firstName + ' ' + lastName;
	
	var str = name + ' is ' + presentOrAbsent;
	console.log(str);

	callback(str);
}

function logStudents(takeAttendance) {
	students.forEach( function(student) {
		takeAttendance(student.firstName, student.lastName, student.present, appendToDOM)
	});

	for (var i = 0; i < students.length; i++) {
	 takeAttendance(students[i].firstName, students[i].lastName, students[i].present, logToConsole)
	}

function logToConsole(str) {
	console.log(str);
}

function appendToDOM(str) {

	document.innerHTML.append(str);
//}
// loop through every student and call takeAttendance with a callback function
// ...


// write one callback function that logs to the console
// ...


// write another callback function that appends to the DOM
// ...