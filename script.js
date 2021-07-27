const addTaskBtn = document.getElementById("addTask");
addTaskBtn.addEventListener("click", addTask);

const taskUl = document.getElementById("task-container");

let completeCount = 1;
let deleteCount = 1;

function addTask(event) {
    //Preventing from the default action of the submit button
    event.preventDefault();

    //Input Task Name
    const task = document.getElementById("taskName");
    let taskName = task.value;
    if (taskName) {
        //We have some task to add

        //Creating New Li
        var taskLi = createNewElement("li");
        taskLi.classList.add("task");
        taskLi.textContent = taskName;

        //creating Action Btn
        let actionBtn = createNewElement("div");
        actionBtn.classList.add("action-btn");

        //creating Green Btn
        let greenBtn = createNewElement("span");
        greenBtn.classList.add("green-btn", "completed-" + completeCount);
        //incrementing complete count 
        completeCount++;
        greenBtn.innerHTML = `<i class="fa fa-check"></i>&nbsp;Completed`;
        greenBtn.addEventListener("click", completedTask);

        console.log(greenBtn);

        //creating Red Btn
        let redBtn = createNewElement("span");
        redBtn.classList.add("red-btn", "remove-" + deleteCount);
        //incrementing complete count 
        deleteCount++;
        redBtn.innerHTML = `<i class="fa fa-times"></i>&nbsp;Delete`;
        redBtn.addEventListener("click", deleteTask);

        console.log(redBtn);

        //Adding Green and Red Btn to the Action Button
        actionBtn.appendChild(greenBtn);
        actionBtn.appendChild(redBtn);

        //Adding actionBtn to taskLi

        taskLi.appendChild(actionBtn);
        console.log(taskLi);

        taskUl.appendChild(taskLi);

        task.value = "";
    } else {
        //We have nothing to add
        alert("Please enter the task and then add to the list! Thank You")
    }
}


//Function to create elements
function createNewElement(elementName) {
    return document.createElement(elementName);
}

function completedTask(event) {
    let completedClassName = event.target.classList[1];
    let completedTask = document.querySelector("."+completedClassName);
    let parentActionBtn = completedTask.parentElement;
    let parentLi = parentActionBtn.parentElement;

    parentLi.style.opacity = "0.4";
}

function deleteTask(event) {
    let toDeleteClassName = event.target.classList[1];
    let toDeleteTask = document.querySelector("."+toDeleteClassName);
    let parentActionBtn = toDeleteTask.parentElement;
    let parentLi = parentActionBtn.parentElement;

    console.log(parentLi.remove());
}