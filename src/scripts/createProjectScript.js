//let url = 'http://localhost:5050';
const url = 'https://glitch.com/~project-backend';
document.getElementById('add-project').addEventListener('click', createProject);



async function createProject(){
    const nameInput = document.getElementById('project-name').value;
    const areaInput = document.getElementById('project-area').value
    let project = {
        name: nameInput,
        subj_area: areaInput,
    };

    let response = await fetch(url+"/logged/add/project", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(project),
        credentials: "same-origin" 
    })
    try{
        let result = await response.json()
        if (result.done)
            return alert("Проект успешно загружен");
    }
    catch(e){
        alert("Ошибка загрузки проекта")
    };
}