const form= document.querySelector('form');
const alltasks = document.querySelector('#alltasks');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let input = document.querySelector('input');
    const text = input.value.trim();

    if(text=='')
        return; 

    const parent= document.createElement('div');
    parent.style.margin="10px"

    const task = document.createElement('span');
     task.textContent=text;
     task.style.color="white"

     const doneButton = document.createElement('button');
     doneButton.textContent='done';
     doneButton.style.width="80px";
     doneButton.style.color ="red";
     doneButton.style.margin ="10px";
     doneButton.style.backgroundColor="yellow";

     const deleteButton = document.createElement('button');
     deleteButton.textContent= 'delete';
     deleteButton.style.width="80px";
     deleteButton.style.color ="green";
     deleteButton.style.margin ="10px";
     deleteButton.style.backgroundColor ="orange";

     parent.append(task,doneButton,deleteButton);

     alltasks.append(parent);

     deleteButton.addEventListener('click',()=>{
          parent.remove();
     })

     doneButton.addEventListener('click',()=>{
          parent.style.textDecoration="line-through";
          parent.style.textDecoration.color="pink";
     })
     form.reset();
})