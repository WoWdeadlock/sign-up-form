password = document.querySelector(".password");
passwordConfirm = document.querySelector(".confirm-password");

passwordInvalid = document.querySelector(".invalid-password");
fieldsInvalid = document.querySelector(".invalid-fields");

createButton = document.querySelector("#create-button");

createButton.addEventListener("click", () => {

    if (password.innerText !== passwordConfirm.innerText) {

        passwordInvalid.classList.remove("hide");

    } else {


            passwordInvalid.classList.add("hide");


    }

});