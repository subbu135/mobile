const hourshand = document.getElementById("one")
const minuteshand = document.getElementById("two");
const secondhand = document.getElementById("three");

function clock(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes =(seconds + date.getMinutes()) / 60;
    const hours =(minutes + date.getHours()) / 12;

    rotateClockHand(secondhand, seconds);
    rotateClockHand(minuteshand, minutes);
    rotateClockHand(hourshand, hours)

}
function rotateClockHand(element, rotation){
    element.style.setProperty("--rotate", rotation * 360);

   
}
setInterval(clock, 1000)