var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var repasswordError = document.getElementById("repassword-error");
var contactError = document.getElementById("contact-error");

function validateName(){
    var name = document.getElementById('name').value;

    if (name.length == 0){
        nameError.innerHTML = "Username Required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email').value;
    if (email.length == 0){
        emailError.innerHTML = "Email Required"
        return false;
    }
    if (!email.match(/^[A-Za-z \._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePassword() {
    var pass = document.getElementById('pass').value;
    if (pass.length == 0) {
        passwordError.innerHTML = "Password Required";
        return false;
    }
    if(pass.length < 9){
        passwordError.innerHTML = "Password must contain at least 9 characters";
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateRePassword(){
    var repass = document.getElementById("re-pass").value;
    var pass = document.getElementById('pass').value;
    if (repass.length == 0) {
        repasswordError.innerHTML = "Password Required";
        return false;
    }
    if(repass.length < 9){
        repasswordError.innerHTML = "Password must contain at least 9 characters";
        return false;
    }
    if (repass!= pass) {
        repasswordError.innerHTML = "Password Does Not Match";
        return false;
    }
   
    repasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateContact(){
    var contact = document.getElementById('contact').value;
    if (contact.length == 0){
        contactError.innerHTML = "Contact Required";
        return false;
    }
    if (contact.length !== 11){
        contactError.innerHTML = "Contact Must Be 11 Digits";
        return false;
    }
    if (!contact.match(/^[0-9]{11}$/)){
        contactError.innerHTML = " Only Digits Required";
        return false;
    }
    contactError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword() || !validateRePassword() || !validateContact()){
        swal("Sorry","Please Fix Error To Sign Up ","error");
        return false;
    }
}