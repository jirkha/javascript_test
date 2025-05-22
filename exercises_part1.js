// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100
function part1_1(number1, number2) {
if (number1 === 100 || number2 === 100 || (number1+number2) === 100) {
    return true
} else {
    return false
}
    }

// Write a JavaScript exercise to get the extension of a filename.
const part1_2 = (filename) => filename.toString().split(".")[1]

// Write a JavaScript program to replace a character in a given string with the character
// following it in the alphabet
const part1_3 = (string) => string.replaceAll(string[0], String.fromCharCode(string[0].charCodeAt() + 1));

// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const part1_4 = (date = new Date()) => `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string
const part1_5 = (string) => console.log((string.startsWith("New!") ? string : "New! " + string));
part5("New xfdbcb test");

