

var comprobar = document.getElementById("comprobar").addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let miNombre = "caleb";
    if(nombre == miNombre){
        var result = document.getElementById("resultado").innerHTML = `Hola ${miNombre}`
    }else{
        var result = document.getElementById("resultado").innerHTML = ``;
        let nombre = document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
    
    }
})