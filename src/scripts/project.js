import { generateHTML,  loadProjectID, loadProject, loadProjectTasks } from "./loadFunctions.js";
import { addProjectTask } from "./addFunctions.js"
import { checkUserLogin } from "./loginFunctions.js";
//import * as projDatatest from "../../data/project.json";
import * as projectSource from "../templates/project.hbs";
//import * as taskData from "../../data/projectTask.json";
import * as taskSource from "../templates/taskProjectPage.hbs";

checkUserLogin().then((result) => { 
  console.log("123");
  loadProjectID().then(res => {
    loadProject(res.id).then(projData => {
      document.getElementById("project-container").insertAdjacentHTML("afterbegin",generateHTML(projectSource,projData.project[0]));
      loadProjectTasks(res.id).then(taskData => {
        if (taskData.tasks.length > 0)
          document.getElementById('task-text').innerHTML = 'Задачи:';
        else 
          document.getElementById('task-text').innerHTML = 'У данного проекта нет задач';
        document.getElementById("tasks-container").insertAdjacentHTML("afterbegin",generateHTML(taskSource, taskData));

        let links = document.getElementsByClassName('card-link');
        for (let i = 0;i<links.length;i++){
          links[i].addEventListener('click', loadTaskIDOnServer);
        }
      });
    }).then(() =>{
      const openBtn = document.getElementById('btn-add-task');
      openBtn.addEventListener("click", addNewTask);
    });;
  })
});




const closeModalBtn = document.getElementById('modal-close-btn');
closeModalBtn.addEventListener("click", close);

const addModalBtn = document.getElementById('modal-add-btn');
addModalBtn.addEventListener("click", add);

const modalAddTask = document.getElementById('modal-add-task');


function add(){
    const addForm = document.getElementById("add-form");
    if(validateDate(addForm) && validateName(addForm)){
      loadProjectID().then((res) => {
        let date = addForm.date.value;
        date = date.split('.');
        date = date[2]+'.'+date[1]+'.'+date[0];
        addProjectTask(res.id, addForm.name.value, date).then((ans) => {
          if (ans.done){
            alert("Задача успешно добавлена");
            window.location.reload();
          }
          else
            alert("Ошибка добавления задачи");
        });
      }).catch(() => {alert("Нет прав")});
    }
};

function close(){
    modalAddTask.style.display = "none";
}
function addNewTask(){
    modalAddTask.style.display = "block";
}


function validateName(form){
    if (form.name.value.length < 3){
        alert("Название задачи должно состоять хотя бы из 3 символов");
        return false;
    }
    return true;
}


function validateDate(form){
    re = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;

    if(form.date.value != "") {
      if(regs = form.date.value.match(re)) {
        // День должен находиться в интервале от 1 до 31
        if(regs[1] < 1 || regs[1] > 31) {
          alert("Неправлильное значение дня: " + regs[1]);
          form.date.focus();
          return false;
        }
        // Месяц должен находиться в интервале от 1 до 12
        if(regs[2] < 1 || regs[2] > 12) {
          alert("Неправильное значение месяца: " + regs[2]);
          form.date.focus();
          return false;
        }
        // Год в интервале от текущего
        if(regs[3] < (new Date()).getFullYear()) {
          alert("Неправильное значение года: " + regs[3] + " - должно быть минимум " + (new Date()).getFullYear());
          form.date.focus();
          return false;
        }
        // не совпадение выражению dd.mm.yyyy
      } else {
        alert("Неправильный формат даты: " + form.date.value);
        form.date.focus();
        return false;
      }
      // пустой ввод
    } else{
        alert("Дата не может быть пустой");
        return false;
    }
    return true;
}


async function loadTaskIDOnServer(){
  //alert(this.id);
  fetch('http://localhost:5050/logged/task/id', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id: this.id})
  });
}