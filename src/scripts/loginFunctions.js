//const url = 'http://localhost:5050';
const url = 'https://project-backend.glitch.me';

export async function checkUserLogin(){
    let response = await fetch(url+'/logged/user', {
        method: 'GET',
        credentials: "same-origin"
    });
    try{
        let result = await response.json();
        if(result){
            //console.log(result);
            return result;
        }
           
    }
    catch(e){
        window.location.replace("login.html");
        //alert(e);
    }
};