

const panels = document.querySelectorAll(".panel");

function toggleOpen(){
    this.classList.toggle("open");
    this.classList.toggle("open-active");
}
panels.forEach(function(input){
    input.addEventListener("click", toggleOpen);
});
