class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        
        const newTask = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };
        this.tasks.push({ newTask });

    }
};

//module.export = taskManager;

// const task1 = new taskManager();
// console.log(task1.task);