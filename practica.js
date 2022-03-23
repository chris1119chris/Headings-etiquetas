function setLogin(){
    try{
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user == "")
        {
            var inputuser = document.getElementById("user");
            inputuser.classList.add("error-input");
            var inputpassword = document.getElementById("pass");
            inputpassword.classList.add("error-input");
            alert("Campo de usuario obligatorio");
        }
        if(user == "mac" && pass == "2022")
        {
            var correctuser = document.getElementById("user");
            correctuser.classList.add("correct-input");
            var correctpassword = document.getElementById("pass");
            correctpassword.classList.add("correct-input");
            alert("Bienvenido");
        }
        //alert("usuario " + user + " password " + pass);
    }
    catch (error)
    {
        console.log(error);
    }
}