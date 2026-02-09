// Creating an array of strings
let myArray:Array<string> = [];

// Add task to myArray
let addTask = (task:string) => {
    myArray.push(task);
    console.log(`Task added to myArray`);
    console.log(`ELements in myArray after insertion: ${myArray.length}`);
}

// List all tasks in myArray
let listAllTasks = () => {
    console.log(`Listing all tasks...`)
    myArray.forEach((task:string) => {
        console.log(task);
    });
}

// Delete selected task in myArray
let deleteTask = (task:string) => {
    let rmIdx:number = myArray.indexOf(task);
    myArray.splice(rmIdx, 1);
    console.log(`ELements in myArray after deletion: ${myArray.length}`);
}


// Run functions
// 1. Add Task
addTask("clean room: high");
addTask("sing a song: low");

// 2. List all Tasks
listAllTasks();

// 3. Delete selected Task
deleteTask("sing a song: low");

// 4. List all Tasks (again)
listAllTasks();
