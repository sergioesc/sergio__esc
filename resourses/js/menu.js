const menu = document.querySelector(".lista__nav");
const button = document.querySelector(".movil__nav");
let i = 0;
const open = button.addEventListener("click", ()=>{
    i++
    if (i == 1){
        menu.style.left = "0"
    }
    if(i==2){
        menu.style.left = "-4000px";
        i=0
    }
});

