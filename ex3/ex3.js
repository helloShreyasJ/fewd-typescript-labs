// TASK: for each variable in https://www.typescriptlang.org/docs/handbook/2/everyday-types.html assigned a value to it and output to screen
// boolean
var flag = true;
console.log("Value assigned to the flag is " + flag);
// number
var num1 = 19;
console.log("Value assigned to num1 is " + num1);
// string
var myString = "flee";
console.log("Value assigned to myString is " + myString);
// array
var myArray = [1, 2, 3];
// LOOPS: looping through array
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("\n");
myArray.forEach(function (value) {
    console.log(value);
});
