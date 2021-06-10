
let taskName = document.querySelector("#taskName");
//console.log("new task: " + taskName.value);
let description = document.querySelector("#description");
//console.log("description: " + description.value);
let assignedTo = document.querySelector("#assignedTo");
let dueDate = document.querySelector("#dueDate");
//console.log(dueDate.value);
let status = document.querySelector("#status");
//console.log("status: " + status.value);
let submitTask = document.querySelector("#submitTask");
let validationName = document.querySelector("#validationName");
let validationDescription = document.querySelector("#validationDescription");
let validationAssignedTo = document.querySelector("#validationAssignedTo");
let validationDueDate = document.querySelector("#validationDueDate");
let validationStatus = document.querySelector("#validationStatus");

// function validation form inputs
// const validFormFieldInput = (data, message) => {
//     if(data.value.length >= 5){
//         message.innerHTML = "Looks good!";
//         //console.log(data.target.value);
//         message.style.color = "green";
//         data.style.borderColor = "green";
//     } else {
//         message.innerHTML = "Please provide a valid description";
//         message.style.color = "red";
//         data.style.borderColor = "red";
//     }
// };


//submitTask.addEventListener("click", validFormFieldInput(taskName,validationName));

const validName = () => {
    if(taskName.value.length >= 5){
        validationName.innerHTML = "Looks good!";
        validationName.style.color = "green";
        taskName.style.borderColor = "green";
    } else {
        validationName.innerHTML = "Please provide a valid description";
        validationName.style.color = "red";
        taskName.style.borderColor = "red";
    }
};

const validDescription = () => {
    if(description.value.length >= 5){
        validationDescription.innerHTML = "Looks good!";
        validationDescription.style.color = "green";
        description.style.borderColor = "green";
    } else {
        validationDescription.innerHTML = "Please provide a valid description";
        validationDescription.style.color = "red";
        description.style.borderColor = "red";
    }
};

const validAssign = () => {
    if(assignedTo.value.length >= 5){
        validationAssignedTo.innerHTML = "Looks good!";
        validationAssignedTo.style.color = "green";
        assignedTo.style.borderColor = "green";
    } else {
        validationAssignedTo.innerHTML = "Please provide a valid description";
        validationAssignedTo.style.color = "red";
        assignedTo.style.borderColor = "red";
    }
};

const validDate = () => {
    if(dueDate.value !== "") {
        validationDueDate.innerHTML = "Looks good!";
        validationDueDate.style.color = "green";
        dueDate.style.borderColor = "green";
    } else {
        validationDueDate.innerHTML = "Please provide a valid description";
        validationDueDate.style.color = "red";
        dueDate.style.borderColor = "red";
    }
};

const validStatus = () => {
    if(status.value !== "Select") {
        validationStatus.innerHTML = "Looks good!";
        validationStatus.style.color = "green";
        status.style.borderColor = "green";
    } else {
        validationStatus.innerHTML = "Please provide a valid description";
        validationStatus.style.color = "red";
        status.style.borderColor = "red";
    }
};

submitTask.addEventListener("click", validName);
submitTask.addEventListener("click", validDescription);
submitTask.addEventListener("click", validAssign);
submitTask.addEventListener("click", validDate);
submitTask.addEventListener("click", validStatus);