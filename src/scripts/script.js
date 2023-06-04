import { generateHTML } from "./loadFunctions";
import { loadProjects, loadUserTasks } from "./loadFunctions";
import * as taskSource from "../templates/taskMainPage.hbs";
//import * as taskData from "../../data/tasks.json";
import { checkUserLogin } from "./loginFunctions";
import * as projectSource from "../templates/projects.hbs";

checkUserLogin().then((result) => {

    loadUserTasks(result.user.id).then(taskData =>{
        //console.log(taskData);
        if (taskData.subtasks.length <= 5){
            document.getElementById("tasks-container").insertAdjacentHTML("afterbegin",generateHTML(taskSource, taskData));
        }
        else{
            taskData.subtasks = taskData.subtasks.slice(0,5);
            document.getElementById("tasks-container").insertAdjacentHTML("afterbegin",generateHTML(taskSource, taskData));
        }
        let taskLinks = document.getElementsByClassName('subtask-link');
            console.log(taskLinks);
            for (let i = 0;i<taskLinks.length;i++){
                taskLinks[i].addEventListener('click', loadTaskIDOnServer);
            }
    });
  
    //import * as projData from "../../data/projects.json"; //assert {type : "json"};
    loadProjects(result.user.id).then(projData => {
        //console.log(projData);
            if(projData.projects.length <= 3){
                document.getElementById("projects-container").insertAdjacentHTML("afterbegin",generateHTML(projectSource, projData));
            } else{
                projData.projects = projData.projects.slice(0,2);
                document.getElementById("projects-container").insertAdjacentHTML("afterbegin",generateHTML(projectSource,  projData));
            }

            let projLinks = document.getElementsByClassName('project-link');
            for (let i = 0;i<projLinks.length;i++){
                projLinks[i].addEventListener('click', loadProjectIDOnServer);
            }
    });
}).catch((err) =>{
    alert("Нет соединения с сервером");
});



async function loadProjectIDOnServer(){
  // alert(this.id);
    fetch('http://localhost:5050/logged/project/id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({id: this.id})
    });
};

async function loadTaskIDOnServer(){
//alert(this.id);
fetch('http://localhost:5050/logged/task/id', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({id: this.id})
});
};