//global consts
const inputPassword = document.querySelector("#input-password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordItem = document.querySelector("#password-item");
const passwordItem2 = document.querySelector("#password-item2");

//set up tooShortPassword
const tooShortPassword = document.createElement("p");
tooShortPassword.style.fontSize = "12px";
tooShortPassword.textContent = "Password needs to be at least 8 characters long. "
tooShortPassword.style.color = "red";

//set up notConfirmedPassword
const notConfirmedPassword = document.createElement("p");
notConfirmedPassword.style.fontSize= "12px";
notConfirmedPassword.textContent = "Password not confirmed."
notConfirmedPassword.style.color = "red";

inputPassword.addEventListener("focusout", (e) => {
    
    //password too short so give appropriate warning

    if(inputPassword.value.length > 0 && inputPassword.value.length < 8 && tooShortPassword.parentElement === null) {
        passwordItem.appendChild(tooShortPassword);
    }
    if(inputPassword.value.length >= 8) {
        //remove min password warning 
        if(tooShortPassword.parentElement !== null) {
            passwordItem.removeChild(tooShortPassword);
        }

        confirmPassword.setAttribute("pattern", inputPassword.value);
    }

})

confirmPassword.addEventListener("focusout", (e) => {
    if(confirmPassword.value !== inputPassword.value) {
        passwordItem2.appendChild(notConfirmedPassword);
    }
    else {
        passwordItem2.removeChild(notConfirmedPassword);
    }   
})