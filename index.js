let mohamed = document.querySelectorAll(".oo")
console.log(mohamed)

mohamed[0].addEventListener("click",()=>{
    mo()
    mohamed[0].classList.toggle("active")
})
mohamed[1].addEventListener("click",()=>{
    mo()
    mohamed[1].classList.toggle("active")
})
mohamed[2].addEventListener("click",()=>{
    mo()
    mohamed[2].classList.toggle("active")
})
mohamed[3].addEventListener("click",()=>{
    mo()
    mohamed[3].classList.toggle("active")
})
mohamed[4].addEventListener("click",()=>{
    mo()
    mohamed[4].classList.toggle("active")
})
mohamed[5].addEventListener("click",()=>{
    mo()
    mohamed[5].classList.toggle("active")
})
function mo (){
for (let i = 0 ; i<6 ; i++){
    mohamed[i].classList.remove("active")
}}


