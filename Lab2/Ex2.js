// Class
var Ex2Class = /** @class */ (function () {
    function Ex2Class() {
        this.myArray = [];
    }
    // Add task to myArray
    Ex2Class.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("Task added to myArray");
        console.log("ELements in myArray after insertion: ".concat(this.myArray.length));
    };
    // List tasks in myArray
    Ex2Class.prototype.listAllTasks = function () {
        console.log("Listing all tasks...");
        this.myArray.forEach(function (task) {
            console.log(task);
        });
    };
    // Delete selected task in myArray
    Ex2Class.prototype.deleteTask = function (task) {
        var rmIdx = this.myArray.indexOf(task);
        this.myArray.splice(rmIdx, 1);
        console.log("ELements in myArray after deletion: ".concat(this.myArray.length));
    };
    return Ex2Class;
}());
// Run functions
var myTodo = new Ex2Class();
// 1. Add Task
myTodo.addTask("clean room: high");
myTodo.addTask("sing a song: low");
// 2. List all Tasks
myTodo.listAllTasks();
// 3. Delete selected Task
myTodo.deleteTask("sing a song: low");
// 4. List all Tasks (again)
myTodo.listAllTasks();
