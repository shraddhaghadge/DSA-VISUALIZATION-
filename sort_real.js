/*document.getElementById("phoneNO").innerHTML =
Math.floor(Math.random() * 9000000000)+1000000000;

function phoneNO(){
    document.getElementById(phoneNO).innerText=Math.floor(Math.random() * 9000000000)+1000000000;
}   

function createNewContact() {
    document.getElementById("add-contact").style.opacity = "0"
}*/


function save(){
    document.getElementById("add-contact").style.opacity = "0";

  x = document.getElementById("firstName").value +" "+ document.getElementById("lastName").value;
    document.getElementById("justName").innerHTML = x;
}

function createNewContact() { 
    document.getElementById("add-contact").style.opacity = "1";

}


