import { checkUserLogin } from "./loginFunctions";

//const url = 'http://localhost:5050';
const url = 'https://glitch.com/~project-backend';


const username = document.getElementById("username-text");
checkUserLogin().then(user => {
    username.innerHTML = user.user.username;
});

const exitButton = document.getElementById("exit-button");

exitButton.addEventListener("click", exit)



async function exit(){
    let response = await fetch(url+"/auth/logout", {
        method: 'POST'
    });
    try{
        let result = await response.json();
        //alert(result);
        window.location.replace("login.html");
    } catch(e){
        console.log(e);
    }
}