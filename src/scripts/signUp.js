let url = 'http://localhost:5050';

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener("click", redirectToLogin);
const signupButton = document.getElementById('signupButton');
signupButton.addEventListener("click", signup)

async function signup(){
    const loginInput = document.getElementById('floatingLogin').value;
    const passwordInput = document.getElementById('floatingPassword').value
    let user = {
        login: loginInput,
        password: passwordInput
    };
    // let validate = await fetch("https://api.smtp.bz/v1/check/email/"+loginInput, {
    //     method: 'GET',
    //     headers:{
    //         'Authorization': 'Fw3y9OwIjCil1oT1DbEF1e9udAxerhKXEDlC'
    //     },
    // });
    // console.log(validate)
    console.log(loginInput);
    console.log(passwordInput);
    let response = await fetch(url+"/auth/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(user)
    });
    let result = await response.json;
    console.log(result);
}

function redirectToLogin(){
    window.location.replace('login.html')
}