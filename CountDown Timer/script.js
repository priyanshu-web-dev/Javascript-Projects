let result=document.querySelector("#result")

setInterval(()=>{
    
     
    const CurrentTime = Date.now();
    const MatchTime = new Date(2028,7,24);
    
    let totalTime=MatchTime-CurrentTime
    
    const day = Math.floor((totalTime)/(1000*60*60*24))
    totalTime%=1000*60*60*24;
    const hour = Math.floor((totalTime)/(1000*60*60))
    totalTime%=1000*60*60;
    const minute = Math.floor((totalTime)/(1000*60))
    totalTime%=1000*60;
    
     const second = Math.floor((totalTime)/(1000))
    totalTime%=1000;

    const miliseconds = Math.floor((totalTime))
    totalTime%=0
    
    result.textContent=(day + ': day  ')+(hour+': Hour ')+(minute+': minute   ')+(second  + ': second '+miliseconds+(' : miliseconds'))
})