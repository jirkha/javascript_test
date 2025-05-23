// Write a JavaScript program to compare two objects to determine if the first one contains
// the same properties as the second one (which may also have additional properties). For
// example, objA and objB are equal (but not equal to objC).
const part4_2 = (obj1, obj2) => {
  for (let item of Object.keys(obj1)) {
  if (Object.keys(obj2).includes(item)) {
    continue
  } else {
    return false
  } 
} return true
}
const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1 };
// ALTERNATIVOU JE POUŽITÍ Object.keys(obj1).every(key => obj2[key])

// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array. Example input:
const part4_3 = (string) => console.log(string.split("\n").map(row=>row.split(",")))
const exampleString =  
`abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`