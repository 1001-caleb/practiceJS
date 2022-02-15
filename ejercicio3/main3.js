

var comprobar = document.getElementById("comprobar").addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value.toLowerCase();
    
    let miNombre = "caleb";
    if(nombre == miNombre){
        let nombreConvertido = nombre.substring(0,1).toUpperCase() + nombre.substring(1,).toLowerCase();
        var result = document.getElementById("resultado").innerHTML = `Hola ${nombreConvertido}`
        
        
    }else{
        var result = document.getElementById("resultado").innerHTML = ``;
        let nombre = document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
    
    }
})