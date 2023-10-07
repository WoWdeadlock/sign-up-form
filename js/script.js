password = document.querySelector("#password-value");
passwordConfirm = document.querySelector("#confirm-password-value");

passwordInvalid = document.querySelector(".invalid-password");
fieldsInvalid = document.querySelector(".invalid-fields");

createButton = document.querySelector("#create-button");

inputBoxes = document.querySelectorAll(".input-value");

createButton.addEventListener("click", () => {

    emptyField = true;

    if (password.value !== passwordConfirm.value) {

        passwordInvalid.classList.remove("hide");

    } else {

        passwordInvalid.classList.add("hide");

    }

    for (let i = 0; i < inputBoxes.length; i++) {

        if (inputBoxes[i].value.trim().length === 0) {

            inputBoxes[i].classList.add("invalid-border");
            emptyField = true;
            break;

        } else {

            emptyField = false;

        }    

    }

    if (emptyField == true) {

        fieldsInvalid.classList.remove("hide");

    } else {

        fieldsInvalid.classList.add("hide");

    }

});

for (let i = 0; i < inputBoxes.length; i++) {

    inputBoxes[i].addEventListener("click", () => {

        if (inputBoxes[i].classList.contains("invalid-border")) {

            inputBoxes[i].classList.remove("invalid-border");
    
        }            

    })

}