let name=document.getElementById("name");
let new1=document.querySelector(".new")
let btn=document.getElementById("btn")

let email=document.getElementById("email")
let new2=document.querySelector(".new")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let para=document.createElement("p")
    para.innerHTML=name.value
    new1.appendChild(para)

    let para2=document.createElement("p")
    para2.innerHTML=email.value
    new2.appendChild(para2)

    name.value="";
    email.value="";
})