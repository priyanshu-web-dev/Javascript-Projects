const form = document.querySelector('form');
const answer ={
    Q1 : "Virat Kohli",
    Q2 : "Jasprit Bumrah",
    Q3 : "Rohit Sharma",
    Q4 : "Naseem Shah",
    Q5 : "Hardik Pandya"
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for(let[name,value] of data.entries()){
        if(answer[name]===value){
        finalScore++;
        }
        document.querySelector("#result").textContent = `your score is ${finalScore} out of 5`;
         
        
    }
    j
    }
)
