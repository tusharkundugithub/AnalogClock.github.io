setInterval(() => {
    time = new Date();
    hr = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    hrTime = (30*hr) + (min/2);
    minTime = 6*min;
    secTime = 6*sec;

    hour.style.transform = `rotate(${hrTime}deg)`;
    minute.style.transform = `rotate(${minTime}deg)`;
    second.style.transform = `rotate(${secTime}deg)`;
   
    
}, 1000);