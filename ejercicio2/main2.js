document.getElementById("btn1").addEventListener("click", function(){
    let img = document.getElementById("img").classList.add("fondo");
});

document.getElementById("btn2").addEventListener("click", function(){
    let imgInvisible = false; //no esta invisible

    if (imgInvisible == false){
        let ocultar = document.getElementById("img").classList.add("ocultar");
        imgInvisible == true
    }
    else if(imgInvisible == true){
        let desocultar = document.getElementById("img").classList.add("desocultar");
    }
});

document.getElementById("btn3").addEventListener("click", function(){
    let img = document.getElementById("img").classList.remove("fondo");
    let desocultar = document.getElementById("img").classList.remove("ocultar");
});







































