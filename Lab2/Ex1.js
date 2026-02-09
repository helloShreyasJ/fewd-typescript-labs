// Creating an array of strings
var myArray = [];
// Add task to myArray
var addTask = function (task) {
    myArray.push(task);
    console.log("Task added to myArray");
    console.log("ELements in myArray after insertion: ".concat(myArray.length));
};
// List all tasks in myArray
var listAllTasks = function () {
    console.log("Listing all tasks...");
    myArray.forEach(function (task) {
        console.log(task);
    });
};
// Delete selected task in myArray
var deleteTask = function (task) {
    var rmIdx = myArray.indexOf(task);
    myArray.splice(rmIdx, 1);
    console.log("ELements in myArray after deletion: ".concat(myArray.length));
};
// Test functions
// 1. Add Task
addTask("clean room: high");
addTask("sing a song: low");
// 2. List all Tasks
listAllTasks();
// 3. Delete selected Task
deleteTask("sing a song: low");
// 4. List all Tasks (again)
listAllTasks();
