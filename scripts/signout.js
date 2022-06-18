var userCreds=JSON.parse(localStorage.getItem("userData")) || []
var form=document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()

    var data={
        email: document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    if(data===null){
        alert("Please Create an Accoount")
        window.location.href="createaccount.html"
    }
    else if(userCreds.email===data.email && userCreds.password ==data.password){
        alert("Sign is Successfull")
        localStorage.setItem("signin",JSON.stringify(data))
        window.location.href="./index.html"
    }
    else{
        alert("User Does not Exist")
        window.location.reload()
    }


})