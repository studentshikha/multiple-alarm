let hh = document.getElementById("hours")
let mm = document.getElementById("minutes")
let ss = document.getElementById("seconds")
const timersContainer = document.getElementById("timerscontainer");
const set = document.getElementById("set-button");
const stopSound = document.getElementById("timer-end");


//  when no timer currently
function notimerCheck(){
    if(timersContainer.childElementCount==0){
        const  noTimersmsg = document.createElement("p");
         noTimersmsg.textContent = "You have no timers currently!";
         document.getElementById("no timer").appendChild(noTimersmsg);
    }
    else{
        document.getElementById("no timer").innerHTML = "";
    }
    
}

set.addEventListener('click', ()=>{
    // user input user ne 1 hour likha
    const hour = Number(hh.value) || 0;   
    // 10 min
      const minute = Number(mm.value) || 0;   
    //  10 sec input mai dala h
      const second = Number(ss.value) || 0;                      

    //   then total time in sec 1 *3600 + 10 *60 + 10 = 4210
let  totalTimeInSec = hour*3600 + minute*60 + second;           

    //   create timer element
      const timerElement = document.createElement("div");
      timerElement.classList.add("timerElementCount");
       const text = document.createElement("p");
       text.classList.add("time-left")
       text.innerText = "Time Left: ";
       const p = document.createElement("p");
    //     p.textContent =(1 hour, 10 min ,10 sec)
       p.textContent = formatTime(hour ,minute, second);           
   

    //    create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        timerElement.remove(timerElement , text , p )
        clearInterval(interval);
        notimerCheck();
    })


  timerElement.append(text, p, deleteButton);
  timersContainer.append(timerElement);
// notimerCheck();


// start the timer using set interval
const interval = setInterval( ()=>{
    // 4210 > 0 yes
    if(totalTimeInSec >0){   
        // 4210-- 
        totalTimeInSec--;

        p.textContent =formatTime(
            //  4210/3600 = 1 hour    
            Math.floor(totalTimeInSec/3600),
                 //   gives 10 min
            Math.floor((totalTimeInSec %3600)/60),
            //     10 sec
            totalTimeInSec % 60
        );
    }
    //  timer reached to 0 then this else block code  will excueted
    else{ 
        clearInterval(interval);
        timerElement.classList.add("isFinished");
        text.textContent =""
        p.textContent= "Timer is Up !";
        deleteButton.textContent= "stop";
          // When timer is of play sound 
          stopSound.play(); 
    }
},1000);

//
 })
function formatTime(hour ,minute, second){
  return (
    padZero(hour) +' '+' '+':' +' '+' '+
    padZero(minute) +' '+' '+':'+' '+' '+
    padZero(second)
);
}

function padZero(num){
    return num < 10 ? '0' + num : num;
}



 























// https://github.com/studentshikha/multiple-alarm.git