// UI Vars
const taskInput = document.querySelector("#task"); //the task input text field
const form = document.querySelector("#task-form"); //The form at the top
const filter = document.querySelector("#filter"); //the task filter text field
const taskList = document.querySelector(".collection"); //The ul
const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button
//the reload button at the top right of navigation
const reloadIcon = document.querySelector(".fa");
const ascend = document.querySelector("#ascend");
const descend = document.querySelector("#descend");

var input = [];

// Add Event Listener [Form , clearBtn and filter search input ]
// form submit
ascend.addEventListener("click", ascending);

descend.addEventListener("click", descending);

form.addEventListener("submit", addNewTask);
// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
// Filter Task
filter.addEventListener("keyup", filterTasks);

// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

taskList.addEventListener("click", removeTask);
// Event Handlers

function addNewTask(e) {
  e.preventDefault();

  if (taskInput.value == "") {
    taskInput.style.borderColor = "red";
    return;
  }

  ascending();

  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  if (taskList == "") {
    taskList.appendChild(li);
  } else {
    taskList.insertBefore(li, taskList.firstElementChild);
  }

  taskInput.value = "";
  text = { textContent: li.textContent };
  input.push(text);
}

function clearAllTasks(e) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  input = []
}
function filterTasks(e) {
  let filterx = filter.value;
  let y = document.querySelectorAll(".collection-item");
  y.forEach((item) => {
    if (item.textContent.indexOf(filterx)) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
function reloadPage() {
  location.reload();
}

function ascending() {
  var lis = taskList.children;

  for (let index = 0; index < lis.length; index++) {
    lis[index].style.display = "none";
  }

  for (let index = 0; index < input.length; index++) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(input[index].textContent));
    const link = document.createElement("a");
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = "delete-item secondary-content";
    li.appendChild(link);

    if (taskList == "") {
      taskList.appendChild(li);
    } else {
      taskList.insertBefore(li, taskList.firstElementChild);
    }
  }
}

function descending() {
  var lis = taskList.children;

  for (let index = 0; index < lis.length; index++) {
    lis[index].style.display = "none";
  }

  for (let index = 0; index < input.length; index++) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(input[index].textContent));
    const link = document.createElement("a");
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = "delete-item secondary-content";
    li.appendChild(link);

    taskList.appendChild(li);
  }
}
