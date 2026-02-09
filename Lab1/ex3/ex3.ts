// TASK: for each variable in https://www.typescriptlang.org/docs/handbook/2/everyday-types.html assigned a value to it and output to screen

// boolean
let flag:boolean = true;
console.log("Value assigned to the flag is " + flag);

// number
let num1:number = 19;
console.log("Value assigned to num1 is " + num1);

// string
let myString:string = "flee";
console.log("Value assigned to myString is " + myString);

// array
let myArray: number[] = [1, 2, 3];


// LOOPS: looping through array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("\n");

myArray.forEach((value:number) => {
    console.log(value);
});