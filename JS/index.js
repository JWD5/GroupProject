
let taskName = document.querySelector("#taskName");
//console.log("new task: " + taskName.value);
let description = document.querySelector("#description");
//console.log("description: " + description.value);
let assignedTo = document.querySelector("#assignedTo");
let dueDate = document.querySelector("#dueDate");
let status = document.querySelector("#status");
//console.log("status: " + status.value);
let submitTask = document.querySelector("#submitTask");
let validationName = document.querySelector("#validationName");
let validationDescription = document.querySelector("#validationDescription");
let validationAssignedTo = document.querySelector("#validationAssignedTo");
let validationDueDate = document.querySelector("#validationDueDate");
let validationStatus = document.querySelector("#validationStatus");

// function validation form inputs
const validFormFieldInput = (data, message) => {
    if(data.target.value.length >= 5){
        message.target.innerHTML = "Looks good!";
        message.target.style.color = "green";
        data.target.style.borderColor = "green";
    } else {
        message.target.innerHTML = "Please provide a valid description";
        message.target.style.color = "red";
        data.target.style.borderColor = "red";
    }
};

submitTask.addEventListener("click", validFormFieldInput(taskName,validationName));

// const validFormFieldInput = () => {
//     if(taskName.value.length >= 5){
//         validationName.innerHTML = "Looks good!";
//         validationName.style.color = "green";
//         taskName.style.borderColor = "green";
//     } else {
//         validationName.innerHTML = "Please provide a valid description";
//         validationName.style.color = "red";
//         taskName.style.borderColor = "red";
//     }
// };

// submitTask.addEventListener("click", validFormFieldInput);