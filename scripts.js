//  getting Dom elements 
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtonB = player.querySelector(".backward");
const skipButtonF = player.querySelector(".forward");
const rangeVolume = player.querySelector(".volume")
const rangeSpeed = player.querySelector(".speed")


// console.log(skipButtonsB)
//  console.log(progressBar)

// making functions

//for laying and pausing video
function togglePlay () {
    if (video.paused){
        video.play();
    }
    else{
        video.pause();
        
    }
    // console.log("apples")
}

//for updating play pause button

function updateButton () {
    // console.log("apples")

    const icon = this.paused ? "►":" ⏸" 
    toggle.textContent = icon;
    console.log(icon)
}
// forward backards
function skip(){
    // console.log(typeof this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRange (){
    console.log(this.value)
    console.log(this.name)
    video[this.name]=parseFloat(this.value);
}


function handleProgress (){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`
    console.log(percent)
}
//function for changing prorgess of video on click

function scrub (e){
    console.log(e);
    let scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;
}

// conect event listners

video.addEventListener("click", togglePlay);
//adding event listerner for any cahse wehn the video is paysed which will toggle the play/pause button
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);


//for forwarding and reversing the video 
skipButtonB.addEventListener("click", skip);
skipButtonF.addEventListener("click", skip);
//handling speed and volume controller
rangeVolume.addEventListener('click',handleRange)
rangeSpeed.addEventListener('click',handleRange)

// handling video proressbar
 
let mouseDown = false;
video.addEventListener("timeupdate", handleProgress)
progress.addEventListener("click",scrub)
progress.addEventListener("mousedown",()=>{mouseDown = true
console.log(mouseDown)});
progress.addEventListener("mouseup",()=>{mouseDown = false
    console.log(mouseDown)});
progress.addEventListener("mousemove",(e)=> mouseDown && scrub(e))