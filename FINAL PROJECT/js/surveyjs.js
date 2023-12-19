function goBack() {
    window.history.back();
   }

var choice;

//select
function sel(){
    var select = document.getElementById("select");
    var selectedOption = select.options[select.selectedIndex];
    choice = selectedOption.value;

    console.log("The choice you select is: ", choice);
} 
function sel1(){
    var select = document.getElementById("select");
    var selectedOption = select.options[select.selectedIndex];
    choice = selectedOption.value;

    console.log("The choice you select is: ", choice);
} 

function survey(){
    //dec
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var text = document.getElementById('text').value;
    
    document.getElementById('name1').innerHTML = name;
    document.getElementById('age1').innerHTML = age;
    document.getElementById('email1').innerHTML = email;
    document.getElementById('no').innerHTML = number;
    document.getElementById('sug').innerHTML = text;
    document.getElementById('fav').innerHTML = choice;
}




