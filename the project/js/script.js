let divDay=document.querySelector("main .time .day span")
let divhours=document.querySelector("main .time  .hours span")
let divminutes=document.querySelector("main .time .minutes span")
let divSeconds=document.querySelector("main .time .Seconds span")

setInterval(() => {
    let currentDate=new Date()
    let day=currentDate.getDate()
    let hours=currentDate.getHours()
    let minutes=currentDate.getMinutes()
    let Seconds=currentDate.getSeconds()
    divDay.innerHTML=day
    divhours.innerHTML=hours
    divminutes.innerHTML=minutes
    divSeconds.innerHTML=Seconds
},1000)