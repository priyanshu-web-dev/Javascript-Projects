const form=document.querySelector('form');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
 
 const income = document.querySelector('#income');

const amount= parseInt(income.value);

const result = document.querySelector('h2');

let paidTax= 0;
  if(amount<=1200000){
    paidTax=0}
else if(amount<=1600000){
    paidTax=(amount-1200000)*15/100;
}else if(amount<=2000000){
    paidTax=(amount-1600000)*20/100+60000;
}else if(amount<=2400000){
    paidTax=(amount-2000000)*25/100+60000+80000;
}else {
    paidTax=(amount-2400000)*30/100+60000+80000+100000;
}

   result.textContent= paidTax;
   e.reset();
})