
import { checkUserLogin } from "./loginFunctions";

//let url = 'http://localhost:5050';
const url = 'https://glitch.com/~project-backend';

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener("click", login);
const signupButton = document.getElementById('signupButton');
signupButton.addEventListener("click", redirectToSignUp)

async function login(){
    const loginInput = document.getElementById('floatingLogin').value;
    const passwordInput = document.getElementById('floatingPassword').value
    let user = {
        login: loginInput,
        password: passwordInput
    };
    
    let response = await fetch(url+"/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(user),
        credentials: "same-origin" 
    }).then((res) => {
        window.location.replace('index.html');
    }).catch((e) =>{
        alert("Неверный логин или пароль")
    });
        
}
function redirectToSignUp()
{
    window.location.replace('signUp.html')
}
