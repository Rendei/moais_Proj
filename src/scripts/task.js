import { generateHTML, loadTask, loadTaskID, loadTaskSubtasks } from "./loadFunctions.js";
import * as subTaskContainerSource  from  "../templates/subtaskContainer.hbs";
// import * as subTaskContainerData from "../../data/subtaskContainer.json";
// import * as subtasskData from "../../data/subtask.json";
import * as subtasksSource from "../templates/subtask.hbs";
import { checkUserLogin } from "./loginFunctions.js";
import { addProjectSubTask } from "./addFunctions.js";
const closeModalBtn = document.getElementById('modal-close-btn');
closeModalBtn.addEventListener("click", close);

const addModalBtn = document.getElementById('modal-add-btn');
addModalBtn.addEventListener("click", add);

const modalAddSubTask = document.getElementById('modal-add-subtask');
let user;

checkUserLogin().then(result => {
    user = result;
    loadTaskID().then(res => {
        loadTask(res.id).then(subTaskContainerData =>{
            document.getElementById("subtask-container").insertAdjacentHTML("afterbegin", generateHTML(subTaskContainerSource, subTaskContainerData.task[0]));
        }).then(() =>{
            const openBtn = document.getElementById('btn-add-subtask');
            openBtn.addEventListener("click", addNewSubTask);
        });
        loadTaskSubtasks(res.id).then(subtasskData => {
            document.getElementById("subtasks-container").insertAdjacentHTML("afterbegin",generateHTML(subtasksSource, subtasskData));
        });

    });
});

function add(){
    const addForm = document.getElementById("add-form");
    loadTaskID().then((res) => {
    let difficultySelect = document.getElementById("subtask-dif");
    addProjectSubTask(res.id, user.id, addForm.name.value, difficultySelect.value).then((ans) => {
        console.log(ans);
        if (ans.done){
        alert("Подзадача успешно добавлена");
        window.location.reload();
        }
        else
        alert("Ошибка добавления подзадачи");
    });
    }).catch(() => {alert("Нет прав")});

};



function close(){
    modalAddSubTask.style.display = "none";
}
function addNewSubTask(){
    modalAddSubTask.style.display = "block";
}
