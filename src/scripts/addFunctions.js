const url = 'http://localhost:5050';


export async function addProjectTask(id_proj, name, deadline){
    let response = await fetch(url+"/logged/add/task", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({
            id_proj: id_proj,   
            name: name,
            deadline: deadline
        }) 
    });
    try{
        let result = await response.json();
        console.log(result);
        return result;
    }
    catch(e){
        console.log(e);
    }
};



export async function addProjectSubTask(id_task, id_user, name, difficulty){
    let response = await fetch(url+"/logged/add/subtask", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({
            id_task: id_task,  
            id_user: id_user,
            name: name,
            difficulty: difficulty, 
            is_done: false
        }) 
    });
    try{
        let result = await response.json();
        console.log(result);
        return result;
    }
    catch(e){
        console.log(e);
    }
};