import { generateHTML } from "./loadFunctions";
import { loadProjects } from "./loadFunctions";
//import * as projData from "../../data/projects.json"; //assert {type : "json"};
import { checkUserLogin } from "./loginFunctions";
import * as projectSource from "../templates/projects.hbs";

checkUserLogin().then((result) => {
    loadProjects(result.user.id).then(projData => {
      document.getElementById("projects-container").insertAdjacentHTML("afterbegin",generateHTML(projectSource,projData));
      let links = document.getElementsByClassName('card-link');
      for (let i = 0;i<links.length;i++){
        links[i].addEventListener('click', loadProjectIDOnServer);
      }
    });
});



async function loadProjectIDOnServer(){
  //alert(this.id);
  fetch('http://localhost:5050/logged/project/id', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id: this.id})
  });
}