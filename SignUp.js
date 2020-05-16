 let mobile = document.getElementById("number");
 let email = document.getElementById("email");
 let pwd = document.getElementById("pwd");
 let pawd = document.getElementById("pawd");
 let fname = document.getElementById("firstname");
 let lname = document.getElementById("lastname");




 function validation() {
     if (fname.value == "") {
         document.getElementById("message1").innerHTML = "** Enter first name";
         document.getElementById("message1").style.color = "red";
         return false;

     } else if (fname.value.length < 4) {
         document.getElementById("message1").innerHTML = "** first name must have minimum 4 characters";
         document.getElementById("message1").style.color = "red";
         return false;

     } else if (fname.value.length > 15) {
         document.getElementById("message1").innerHTML = "** First name must be less than 15 characters";
         document.getElementById("message1").style.color = "red";
         return false;

     } else if (lname.value == "") {
         document.getElementById("message2").innerHTML = "** Enter last name";
         document.getElementById("message2").style.color = "red";
         return false;

     } else if (lname.value.length < 4) {
         document.getElementById("message2").innerHTML = "** Last name must have minimum 4 characters";
         document.getElementById("message2").style.color = "red";
         return false;

     } else if (lname.value.length > 15) {
         document.getElementById("message2").innerHTML = "** Last name must be less than 15 characters";
         document.getElementById("message2").style.color = "red";
         return false;

     } else if (mobile.value == "") {
         document.getElementById("message3").innerHTML = "** Fill Mobile Number ";
         return false;

     } else if (mobile.value.length < 10) {
         document.getElementById("message3").innerHTML = "** Mobile Number must be 10 digit ";
         document.getElementById("message4").style.color = "red";
         return false;

     } else if (mobile.value.length > 10) {
         document.getElementById("message3").innerHTML = "** Mobile Number must  not be more than 10 digit ";
         document.getElementById("message4").style.color = "red";
         return false;

     } else if (email.value == "") {
         alert("Enter Email");
         return false;

     } else if (pwd.value == "") {
         document.getElementById("message4").innerHTML = "** Enter Password";
         return false;

     } else if (pwd.value.length < 5) {
         document.getElementById("message4").innerHTML = "**  Weak Password ";
         document.getElementById("message4").style.color = "red";
         pwd.style.border = "2px solid red";
         return false;

     } else if (pwd.value.length <= 6) {
         document.getElementById("message4").innerHTML = "**  Medium Strength ";
         document.getElementById("message4").style.color = "orange";
         pwd.style.border = "2px solid orange";
         return false;

     } else if (pwd.value.length < 10) {
         document.getElementById("message4").innerHTML = "** Password must contain minimum 10 characters";
         document.getElementById("message4").style.color = "red";
         pwd.style.border = "2px solid green";
         return false;

     } else if (pwd.value.search(/[0-9]/) == -1) {
         document.getElementById("message4").innerHTML = "** Atleast 1 numerical value must be entered";
         document.getElementById("message4").style.color = "red";
         pwd.style.border = "2px solid red";
         return false;

     } else if (pwd.value.search(/[A-Z]/) == -1) {
         document.getElementById("message4").innerHTML = "** Atleast 1 Uppercase must be entered";
         document.getElementById("message4").style.color = "red";
         pwd.style.border = "2px solid red";
         return false;

     } else if (pwd.value.search(/[a-z]/) == -1) {
         document.getElementById("message4").innerHTML = "** Atleast 1 Lowercase must be entered";
         document.getElementById("message4").style.color = "red";
         pwd.style.border = "2px solid red";
         return false;

     } else if (pawd.value == "") {
         document.getElementById("message5").innerHTML = "**  Please enter Confirm Password ";
         document.getElementById("message5").style.color = "red";
         return false;

     } else if (pwd.value != pawd.value) {
         document.getElementById("message5").innerHTML = "** Password entered is not same";
         document.getElementById("message4").style.color = "red";
         return false;
     } else {
         return true;
     }
 }