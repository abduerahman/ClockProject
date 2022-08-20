const deg = 6;

var hh = document.querySelector("#hr");
var mn = document.querySelector('#mn');
var sc = document.querySelector('#sc');
setInterval(() =>{
    let dat = new Date();
    let hours = dat.getHours() * 30;
    let minstes = dat.getMinutes();
    let sec = dat.getSeconds();

    console.log(sec); 
    hh.style.transform = `rotateZ(${hours}deg)`;
    mn.style.transform = `rotateZ(${minstes * 6}deg)`;
    sc.style.transform = `rotateZ(${sec * 6}deg)`;
},1);