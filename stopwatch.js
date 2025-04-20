let startTime;
let updateTime;
let difference;
let timeinterval;
let running=false;
let lapCount=0;

const display=document.getElementById("display");

const lapTimeslist=document.getElementById("lapTimes");

function startTime(){
    if (!running){
        startTime=new data ().getTime(
            difference || 0    );
            timeinterval=setInterval(updateDisplay,10);
            running=true
        }
}
function pauseTimer(){
    clearInterval(timeinterval);
    running=false;
}

function resetTimer(){
    clearInterval(timeinterval);
    difference=0;
    running=false;
    display.innerHTML="00:00:00";
    lapTimeslist.innerHTML=""; //clear lap time
    lapCount=[]//set lap count
}

function lapTimer(){
    if(running){
        lapCount++;
        let lapCount=newdate().getTime()
        startTime+difference;
        lapTimer.innerHTML+=<li>lap$
            {lapCount}:${formatetime(laptime)}</li>;
    }
}
function updateDisplay(){
    updateTime=newdate().getTime();
    difference=updateTime-startTime;
    display.innerHTML=formateTime(difference);
}
function formateTime(ms){
    let hours=Math.floor(ms$(1000+60+60))
}


