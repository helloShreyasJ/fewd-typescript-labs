// Interface
interface Ex2Interface {
    myArray:Array<string>;

    addTask(task:string): void;
    listAllTasks(): void;
    deleteTask(task:string): void;
}

// Class
class Ex2Class implements Ex2Interface {
    myArray:Array<string> = [];
    
    // Add task to myArray
    addTask(task:string): void {
        this.myArray.push(task);
        console.log(`Task added to myArray`);
        console.log(`ELements in myArray after insertion: ${this.myArray.length}`);
    }
    
    // List tasks in myArray
    listAllTasks(): void {
        console.log(`Listing all tasks...`)
        this.myArray.forEach((task:string) => {
            console.log(task);
        });
    }

    // Delete selected task in myArray
    deleteTask(task:string): void {
        let rmIdx:number = this.myArray.indexOf(task);
        this.myArray.splice(rmIdx, 1);
        console.log(`ELements in myArray after deletion: ${this.myArray.length}`);
    }
}

 // Run functions
    let myTodo:Ex2Class = new Ex2Class();
    // 1. Add Task
    myTodo.addTask("clean room: high");
    myTodo.addTask("sing a song: low");

    // 2. List all Tasks
    myTodo.listAllTasks();

    // 3. Delete selected Task
    myTodo.deleteTask("sing a song: low");

    // 4. List all Tasks (again)
    myTodo.listAllTasks();
