var userCreds=JSON.parse(localStorage.getItem("userData")) || []

    var form=document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();

    var data={
       firstname: document.querySelector("#first").value,
       lastname: document.querySelector("#last").value,
       email: document.querySelector("#email").value,
       password: document.querySelector("#password").value,
   } 
   //console.log(data)
   localStorage.setItem("userData",JSON.stringify(data))
   window.location.href="signup.html"

})
    