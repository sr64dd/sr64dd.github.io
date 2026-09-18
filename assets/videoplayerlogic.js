const delay = ms => new Promise(res => setTimeout(res, ms));

const telePlayer = document.getElementById("tele")
telePlayer.addEventListener('ended', onVideoEnd, false);
const teleNameBar = document.getElementById("telenamebar")

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

shuffle(animationList)
var currentVideo = -1

function changeVid(newSRC, mediaButton) {
    telePlayer.muted = false
    telePlayer.src = newSRC
    var mediaName = mediaButton.textContent
    teleNameBar.innerHTML = "‣ " + mediaName + " ‣"
    pauseButton.src = "assets/tele/controls/telepause.webp"
}

const pauseButton = document.getElementById("playpausebutton")
const loopButton = document.getElementById("looptoggle")

function playpauseVid() {
    if (teleNameBar.innerHTML != "select a media...") {
        if (telePlayer.paused) {
            telePlayer.play()
            pauseButton.src = "assets/tele/controls/telepause.webp"
            teleNameBar.innerHTML = "..."
        } 
        else {
            telePlayer.pause()
            pauseButton.src = "assets/tele/controls/teleplay.webp"
            teleNameBar.innerHTML = "paused."
        }
    }  
}

const skipVid = async (value) => {
    if (teleNameBar.innerHTML != "select a media...") {
        let timeLeft = Math.floor(telePlayer.duration*10)/10
        telePlayer.currentTime += value
        let timeNow = Math.floor(telePlayer.currentTime*10)/10
        teleNameBar.innerHTML = timeNow + " / " + timeLeft
        await delay(2000)
        if (teleNameBar.innerHTML == timeNow + " / " + timeLeft) {
            if (telePlayer.paused) {
                
                teleNameBar.innerHTML = "paused."
            } 
            else {
                teleNameBar.innerHTML = "..."
            }
        }
    }
}

var loopType = "noloop"
function loopVid() {
    if (loopType == "noloop") {
        loopType = "loop"
        loopButton.src = "assets/tele/controls/teleloopon.webp"
    } else if (loopType == "loop") {
        loopType = "tvloop"
        loopButton.src = "assets/tele/controls/telelooprandom.webp"
    } else if (loopType == "tvloop") {
        loopType = "noloop"
        loopButton.src = "assets/tele/controls/teleloopoff.webp"
    }
}


function onVideoEnd() {
    if (telePlayer.src == "assets/tele/screenwaiting.webm") {
        telePlayer.currentTime == 0
        telePlayer.play()
    } else {
        if (loopType == "loop") {
            telePlayer.currentTime == 0
            telePlayer.play()
        } else if (loopType == "tvloop") {
            currentVideo++
            telePlayer.src = animationList[currentVideo]
        } else {
            telePlayer.src = "assets/tele/screenwaiting.webm"
            teleNameBar.innerHTML = "select a media..."
        }
    }
}