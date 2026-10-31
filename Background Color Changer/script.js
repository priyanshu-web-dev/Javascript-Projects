const Red = document.getElementById('red');
const Yellow = document.getElementById('yellow');
const Orange= document.getElementById('orange');
const Black = document.getElementById('black');
const Green = document.getElementById('green');
const Body = document.getElementById('body');

Red.addEventListener("click",()=>{
    Body.style.backgroundColor = "red"
})
Yellow.addEventListener("click",()=>{
    Body.style.backgroundColor = "yellow"
})
Orange.addEventListener("click",()=>{
    Body.style.backgroundColor = "orange"
})
Black.addEventListener("click",()=>{
    Body.style.backgroundColor = "black"
})
Green.addEventListener("click",()=>{
    Body.style.backgroundColor = "green"
})

