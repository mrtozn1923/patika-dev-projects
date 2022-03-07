let myName=document.getElementById("myName");
let myClock=document.getElementById("myClock");
let nowDate,nowTime;
// myName.innerText=prompt("Adınız nedir?");

getDateTime();
setInterval(() => {
    getDateTime();
}, 1000);

function getDateTime(){
    nowDate=new Date().toLocaleDateString('tr-TR', {weekday: 'long'});
    nowTime=new Date().toLocaleTimeString('tr-TR',{hour: '2-digit', minute:'2-digit',second:'2-digit'});
    myClock.innerText=nowTime+" "+nowDate;
}
