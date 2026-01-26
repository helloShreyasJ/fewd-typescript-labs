var flag = true;
console.log("Value assigned to the flag is " + flag);
var num1 = 19;
console.log("Value assigned to num1 is " + num1);
var myString = "flee";
console.log("Value assigned to myString is " + myString);
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("\n");
myArray.forEach(function (value) {
    console.log(value);
});
