let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let num = document.getElementById("num");

function validate() {
  num.innerHTML = "";
    if (email.value == "") {
        alert("Enter Email");
        return false;

    } else if (pwd.value == "") {
        document.getElementById("messages").innerHTML = "** Enter Password";
        document.getElementById("messages").style.color = "red";
        return false;

    } else if (pwd.value.length < 5) {
        document.getElementById("messages").innerHTML = "**  Weak Password ";
        document.getElementById("messages").style.color = "red";
        pwd.style.border = "2px solid red";
        return false;

    } else if (pwd.value.length <= 6) {
        document.getElementById("messages").innerHTML = "**  Medium Strength ";
        document.getElementById("messages").style.color = "orange";
        pwd.style.border = "2px solid orange";
        return false;

    } else if (pwd.value.length < 10) {
        document.getElementById("messages").innerHTML = "**  Password must have minimum 10 characters";
        document.getElementById("messages").style.color = "green";
        pwd.style.border = "2px solid green";
        return false;
    } else if (pwd.value.search(/[0-9]/) == -1) {
        document.getElementById("messages").innerHTML = "** Atleast 1 numerical value must be entered";
        document.getElementById("messages").style.color = "red";
        pwd.style.border = "2px solid red";
        return false;

    } else if (pwd.value.search(/[A-Z]/) == -1) {
        document.getElementById("messages").innerHTML = "** Atleast 1 Uppercase must be entered";
        document.getElementById("messages").style.color = "red";
        pwd.style.border = "2px solid red";
        return false;

    } else if (pwd.value.search(/[a-z]/) == -1) {
        document.getElementById("messages").innerHTML = "** Atleast 1 Lowercase must be entered";
        document.getElementById("messages").style.color = "white";
        pwd.style.border = "2px solid red";
        return false;
    } else {
        return true;
    }
}