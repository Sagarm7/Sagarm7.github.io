let form = document.querySelector(".login-form")
let email = document.getElementById("email")
let password = document.getElementById("password")

function aftersubmit(e){
    e.preventDefault()
    if(email.value =="" || password.value == ""){
        alert("Login credentials incorrecct")
    }
    else{


    }

}


form.addEventListner("submit", afterSubmit)
