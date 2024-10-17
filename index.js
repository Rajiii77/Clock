
function upclock(){
    let date=new Date()
    let hour=date.getHours()
    let meridian=hour>12? "PM" : "AM";
    hour=hour%12 || 12;
    hour=hour.toString().padStart(2,0);
    let min=date.getMinutes().toString().padStart(2,0);
    let seconds=date.getSeconds().toString().padStart(2,0);
    
    let settimer=`${hour}:${min}:${seconds} ${meridian}`
    document.getElementById("texttimer").textContent=settimer;
}
    
upclock()
setInterval(upclock,1000)