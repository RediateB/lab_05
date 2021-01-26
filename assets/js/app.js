// UI Vars
const taskInput = document.querySelector("#task"); //the task input text field
const form = document.querySelector("#task-form"); //The form at the top
const filter = document.querySelector("#filter"); //the task filter text field
const taskList = document.querySelector(".collection"); //The ul
const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button
//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');   

// Add Event Listener [Form , clearBtn and filter search input ]
// form submit
form.addEventListener("submit", addNewTask);
// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
// Filter Task
filter.addEventListener("keyup", filterTasks);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);
// Event Handlers
function addNewTask(e) {
  e.preventDefault();

  if (taskInput.value == "") {
    taskInput.style.borderColor = "red";
    return;
  }

  // Create an li element when the user adds a task
  const li = document.createElement("li");
  // Adding a class
  li.className = "collection-item";
  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append to ul
  taskList.appendChild(li);

  taskInput.value = "";
}
function clearAllTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}
function filterTasks(e) {
    let filterx=filter.value
    let y=document.querySelectorAll(".collection-item")
    y.forEach((item)=>{
        if (item.textContent.indexOf(filterx)) {
            item.style.display="none";
        } else {
            item.style.display="block";
        }
    })
}

taskList.addEventListener('click', removeTask);

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

}
}
function reloadPage() {
    location.reload();
}