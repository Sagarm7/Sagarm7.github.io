let form = document.querySelector(".signup-form")
let email = document.getElementById("email")
let password = document.getElementById("password")
let emaillist = document.querySelector(".email-list")
function afterSubmit(e){
  // e.preventDefault()
  if(email.value == "" || password.value == ""){
    alert("Login credentials incorrect.")
  }
  else{
    let item = document.createElement("li")
    item.innerHTML = email.value
    // console.log(item)
    emaillist.appendChild(item)
    email.value = ""
    password.value = ""

  }

}
form.addEventListener("submit", afterSubmit)
