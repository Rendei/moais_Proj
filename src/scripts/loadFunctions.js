//const url = 'http://localhost:5050';
const url = 'https://project-backend.glitch.me';

export function generateHTML(source, data)
{
    return source.default(data);
};

export async function loadProject(projectID){
    let response = await fetch(url+"/logged/load/project", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({id: projectID}),  
        credentials: "same-origin"
    });
    try{
        let result = await response.json();
        return result;
    }
    catch(e){
        alert("Ошибка загрузки проекта");
    }
};

export async function loadProjectID(){
    let response = await fetch(url+"/logged/project/id", {
        method: 'GET',
        credentials: "same-origin"
    });
    try{
        let result = await response.json();
        return result;
    }
    catch(e){
        alert("Ошибка получения проекта");
    }
};


export async function loadProjects(userID){
    let response = await fetch(url+"/logged/load/projects", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        credentials: "same-origin",
        body: JSON.stringify({id: userID})  // добавить сюда id юзера сайта
    });
    try{
        let result = await response.json();
        //console.log(result);
        return result;
    }
    catch(e){
        alert("Ошибка загрузки проектов");
    }
};


export async function loadProjectTasks(projID){
    let response = await fetch(url+"/logged/load/tasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({id: projID})  // добавить сюда id юзера сайта
    });
    try{
        let result = await response.json();
       // console.log(result);
        return result;
    }
    catch(e){
        alert("Ошибка загрузки заданий");
    }
};

export async function loadTask(taskID){
    let response = await fetch(url+"/logged/load/task", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({id: taskID})  // добавить сюда id юзера сайта
    });
    try{
        let result = await response.json();
       // console.log(result);
        return result;
    }
    catch(e){
        alert("Ошибка загрузки заданий");
    }
};


export async function loadUserTasks(userID){
    let response = await fetch(url+"/logged/load/user/subtasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({id: userID})  // добавить сюда id юзера сайта
    });
    try{
        let result = await response.json();
       // console.log(result);
        return result;
    }
    catch(e){
        alert("Ошибка загрузки заданий");
    }
};

export async function loadTaskID(){
    let response = await fetch(url+"/logged/task/id", {
        method: 'GET',
        credentials: "same-origin"
    });
    try{
        let result = await response.json();
        return result;
    }
    catch(e){
        alert("Ошибка получения задачи");
    }
};


export async function loadTaskSubtasks(taskID){
    let response = await fetch(url+"/logged/load/subtasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({id: taskID})  // добавить сюда id юзера сайта
    });
    try{
        let result = await response.json();
       // console.log(result);
        return result;
    }
    catch(e){
        alert("Ошибка загрузки заданий");
    }
};

export async function updateUsername(name){
    let response = await fetch(url+"/logged/profile/name", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({name: name}) 
    });
    try{
        let result = await response.json();
       // console.log(result);
        return result;
    }
    catch(e){
        alert("Ошибка смены имени");
    }
};
