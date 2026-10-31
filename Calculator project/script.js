let input = document.querySelector('#input');
let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
         let value = button.innerText;

         if(value ==='c'){
            input.value ='';
         }
        else if(value==='='){
            try{
            input.value = eval(input.value)}
            catch{
                input.value='error'
            }
        }
        else{
            input.value +=value;
        };
    });
});