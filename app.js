var e = document.querySelector("#menu-toggler");
e.addEventListener("click" , function (){
    document.querySelector("#menu").classList.toggle("menu-active") ;
    document.querySelector("#menu-toggler").classList.toggle("fa-bars") ;
    document.querySelector("#menu-toggler").classList.toggle("fa-times") ;
    
});
