
function signup(){
    var inputUser = document.getElementById('username').value;    
    var inputPass = document.getElementById('password').value; 

    console.log(inputUser + inputPass);

    localStorage.setItem('myUser', JSON.stringify(inputUser));
    localStorage.setItem('myPass', JSON.stringify(inputPass));

    alert("Succesfully made an account!")
}

var retUser = JSON.parse(localStorage.getItem('myUser'));
var retPass = JSON.parse(localStorage.getItem('myPass'));

function login(){
    var user1 = document.getElementById('username1').value;
    var pass1 = document.getElementById('password1').value;

    localStorage.setItem('myUser1', JSON.stringify(user1));
    localStorage.setItem('myPass1', JSON.stringify(pass1));

    var retUser1 = JSON.parse(localStorage.getItem('myUser1'));
    var retPass1 = JSON.parse(localStorage.getItem('myPass1'));

    console.log(retUser1 + retPass1);

    if(retUser1 == retUser && retPass1 == retPass){
        window.location.href = "main page.html";
    }
    else{
        alert("WRONG PASSWORD OR WRONG USERNAME TRY AGAIN!")
    }
}