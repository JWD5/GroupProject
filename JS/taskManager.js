const createTaskHtml = (name, description, assignedTo, dueDate, status)  => {
  const html = `
  <li class="list-group-item list-border">
  <div class="card cardstyle">
    <div class="card-body">
      <h3 class="card-title">${name}</h3>
      <p class="card-text">${description}</p>
      <h6 class="card-subtitle mb-2 mt-2">Assigned To: <span class="h5 strong">${assignedTo}</span></h6>
      <h6 class="card-subtitle my-3">Date: <span class="strong">${dueDate}</span></h6>
      <div class="align-items-baseline justify-content-between">
        <h6 class="card-subtitle my-3 mt-4">Status: <span class="strong">${status}</span></h6>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-4 justify-content-between ">
            <button class="col-4 btn btn-outline-success"><i class="fa fa-thumbs-o-up "></i>Done</button> 
            <button class="col-4 btn btn-outline-danger"><i class="fa fa-trash"></i>Delete</button>
          </div>
        </div>
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
      for(let i = 0; i < this.tasks.length; i++){
        const renderTask = this.tasks[i];
        //console.log(renderTask);
        const date = new Date(renderTask.newTask.dueDate);
        //console.log(date);
        const formattedDate = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        //console.log(formattedDate);
        const taskHtml = createTaskHtml(
          renderTask.newTask.name, 
          renderTask.newTask.description, 
          renderTask.newTask.assignedTo, 
          formattedDate, 
          renderTask.newTask.status);
        tasksHtmlList.push(taskHtml);
        //console.log(taskHtml);
      }
      const taskHtml = tasksHtmlList.join("\n");
      const taskList = document.querySelector("#displayTask");
      taskList.innerHTML = taskHtml;
  }
};