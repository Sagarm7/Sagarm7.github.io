let form = document.querySelector(".signup-form")
 let email = document.getElementById("email")
 let password = document.getElementById("password")
 let firstname = document.getElementById("first") 
 let surname = document.getElementById("sur")
 let locality = document.getElementById("local")
 let mobite = document.getElementById("phone")


 function afterSubmit(e){
   e.preventDefault()
   if(email.value == "" || password.value == ""){
     alert("Login credentials incorrect.")
   }
//    else{
//        let item = document.createElement("li")
//        item.innerHTML = email.value
//        emailList.appendChild(item)
//        email.value = ""
//        password.value = ""
//    }
 }
 form.addEventListener("submit",afterSubmit)