var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var responseDiv = document.querySelector("#response");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderedLastRegistered();

function displayMessage(type, response) {
    responseDiv.textContent = response;
    responseDiv.setAttribute("class", type);
}

function renderedLastRegistered() {
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    if (!email || !password) {
        return;
    }
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
    var email = emailInput.value;
    var password = passwordInput.value;

    if (email === "") {
        displayMessage("error", "email can not be blank");
    } else if (password === "") {
        displayMessage("error", "password can not be blank")
    } else {
        displayMessage("success", "registered successfully");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        renderedLastRegistered();
    }

})
