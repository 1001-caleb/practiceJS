document.getElementById("btn1").addEventListener("click", function(){
    let div = document.getElementById("resultado").innerHTML = "hola mundo";
});
document.getElementById("btn2").addEventListener("click", function(){
    let div = document.getElementById("resultado").innerHTML = "<img src='logo_size.jpg'><img/>";
})
document.getElementById("btn3").addEventListener("click", function(){
    let div = document.getElementById("resultado").innerHTML += "<button>btn</button>";
})
document.getElementById("btn4").addEventListener("click", function(){
    let div = document.getElementById("resultado").innerHTML = " ";
})