const createTaskHtml = (name, description, assignedTo, dueDate, status)  => {
    const html = `<li class="list-group-item list-border">
    <div class="card cardstyle">
      <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${description}</p>
        <h6 class="card-subtitle mb-2 mt-2">Assigned To: <span class="h5 strong">${assignedTo}</span></h6>
        <h6 class="card-subtitle my-3">Date: <span class="strong">${dueDate}</span></h6>
        <div class="d-flex align-items-baseline justify-content-between">
          <h6 class="card-subtitle my-3 mt-5">Status: <span class="strong">${status}</span></h6>
          <button class="btn btn-lg btn-trash"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
  </li>`;

  return html;
}

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
    render(){
        const tasksHtmlList = [];
    }
};

