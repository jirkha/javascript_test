// Write a JavaScript program to find the number of even digits in a an array of integers
const part3_1 = (array) => array.filter((int) => int > 0 && int % 2 === 0).length;

// Write a JavaScript program to find the number of even values up to a given number
const part3_2 = (number, array = []) => {
    for (let i=1; i<number; i++) {i % 2 === 0 && array.push(i)}
    return array.length
}

// Write a JavaScript program to check whether a given array of integers is sorted in ascending order
const part3_3 = (array) => {
    for (let i = 1; i < array.length; i++) {if (array[i] > array[i-1]) {continue} else {return false}}
    return true
}

// Write a JavaScript program to get the largest even number from an array of integers.
const part3_4 = (array, number = 0) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > number) {
      number = array[i];
    } else {
      continue;
    }
  }
  return number;
};
// ALETRNATIVNĚ MOŽNO POUŽÍT: Math.max(...array.filter)

// Write a JavaScript program to replace the first digit in a string (should contain at least one digit) with a $ character
const part3_5 = (string) => string.replace(/\d/, "$");
