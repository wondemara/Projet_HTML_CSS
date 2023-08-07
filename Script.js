const element =document.querySelector('.menu_burger')
const ele =document.querySelector('.contente_menu')
const nav =document.querySelector('.navigation')
element.addEventListener('click',()=>{
    ele.classList.toggle('active')
})
const home =document.querySelector('.home')
const news =document.querySelector('.new')
const portfolio =document.querySelector('.portfolio')
const contact =document.querySelector('.contact')
const boutton =document.querySelector('.boutton_return')
let butt =()=>{
    if(window.scrollY > 120){
     boutton.classList.add('return_box')
    }else{
        boutton.classList.remove('return_box')
    }
}
window.addEventListener('scroll',()=>butt())





news.addEventListener('click',()=>{
    ele.classList.remove('active')
})
portfolio.addEventListener('click',()=>{
    ele.classList.remove('active')
})
contact.addEventListener('click',()=>{
    ele.classList.remove('active')
})
home.addEventListener('click',()=>{
    ele.classList.remove('active')
})
let Mafonct =()=>{
    if(window.scrollY >100){
        nav.classList.add('decoration')
    }
    else{
        nav.classList.remove('decoration')
    }
}
window.addEventListener('scroll',()=>Mafonct())