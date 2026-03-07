window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#08162d";
}
else{
header.style.background = "#0c1e3e";
}

});
