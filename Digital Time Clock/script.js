setInterval(()=>{
    const result = document.querySelector('#DigitalTime');
    let time = new Date();

    result.textContent= time.toLocaleTimeString()
})