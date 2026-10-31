const body = document.querySelector("body");

body.addEventListener("click",(e)=>{
    console.log(e.clientX,e.clientY);

    const circleElement = document.createElement("div");
    circleElement.classList.add('circle');
    circleElement.textContent='hii'

    const color = ['red','green','blue','orange','pink','yellow','skyblue'];

    circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

    circleElement.style.top = `${e.clintY}px`;
    circleElement.style.left = `${e.clintX}px`;

    body.appendChild(circleElement);

    setTimeout(()=>{
         circleElement.remove();
    },5000);
}
)