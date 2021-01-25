var hamburguer = window.document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    
    document.querySelector(".hamburguer").classList.toggle("show_menu")
    document.querySelector(".sidebar").classList.toggle("show_menu")
    
})
