const inputTask = document.getElementById("task");
const btnAddTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");


function addTask() {
    const inputTaskValue = inputTask.value;
    // if...else pour que l'utilisateur ne génère pas de tâche vide.
    if (inputTaskValue) {
        taskList.innerHTML += `
        <li>
            <p>${inputTaskValue}</p>
            <div>
                <button>Done</button>
                <button>Delete</button>
            </div>
        </li>
        `;    
    } else {
        alert("Remplissez le champ");
    }
    inputTask.value = "";
}

function deleteTask(event) {
    const btnClicked = event.target;
    const btnClickedText = btnClicked.textContent;
    if (btnClickedText === "Delete") {
        const confirmBox = confirm("Voulez-vous vraiment supprimer votre tâche ?");
        if (confirmBox) {
            btnClicked.closest("li").remove();
        }
    } else if (btnClickedText === "Done") {
        btnClicked.textContent = "Undo";
        btnClicked.style.backgroundColor = "blue";
        btnClicked.parentElement.previousElementSibling.style.textDecoration = "line-through";
        btnClicked.parentElement.previousElementSibling.style.color = "rgb(50, 50, 50)";
        
    } else if (btnClickedText === "Undo") {
        btnClicked.textContent = "Done";
        btnClicked.style.backgroundColor = "green";
        btnClicked.parentElement.previousElementSibling.style.textDecoration = "none";
        btnClicked.parentElement.previousElementSibling.style.color = "black";
        
    }
}

btnAddTask.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

// function addTask() {
//     let inputTaskValue = inputTask.value;
   
//     if (inputTaskValue) {
//         taskList.innerHTML +=
//         <li>
//             <p>${inputTaskValue}</p>
//             <div>
//                 <button class="done">Done</button>
//                 <button>Delete</button>
//             </div>
//         </li>
//         ;
//         inputTask,value ="";
//     }
// }
// function deletTask(event) {
//     const btnClicked = event.target;
//     const btnClickedClass = btnClicked.classList;
//     const listItem = btnClicked.closest ("li");
//     const btnClickedText = btnClicked.textContent;
//     if (btnClicked.textContent === "Delete") {
//         listItem.remove();
//     } else if (btnClickedText === "Done") {
//         btnClicked.textContent = "Undo";
//         btnClicked.style.backgroundColor = "blue";
//         btnClicked.parentElement.oreviousElementSibling.style.textDecoration = 
//         "rline-through";
//         btnClicked.parentElement.oreviousElementSibling.style.color = "grey";
//     } else if (btnClickedText === "Done") {
//         btnClicked.textContent = "Undo";
//         btnClicked.style.backgroundColor = "green";
//         btnClicked.parentElement.oreviousElementSibling.style.textDecoration = 
//         "none";
//         btnClicked.parentElement.oreviousElementSibling.style.color = "black";
// }
// }

// btnAddTask.addEventListener ("click", addTask);
// taskList.addEventListener ("click", deleteOrCompleteTask);
// taskList.addEventListener ("keydown", (e) => {
//     e.preventDefault();
//     deleteOrCompleteTask();
// });