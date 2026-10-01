var currentSong = 0
const barDrawer = document.getElementById("musicdrawer")
let bartender1 = document.getElementById("playButton1")
let bartender2 = document.getElementById("playButton2")
let bartender3 = document.getElementById("playButton3")
const flavourText = document.getElementById("bardisplaytext")

const musicPlaylists = {
    "chill" : [
        "AMnvQHD60Ek",
        "CFS8E-ccPAE",
        "HuhDSkJH9cc",
        "jHo0YQuJNhY",
        "D28LNzfQKtc",
        "nBUxr7uiLR0"
    ],
    "reg" : [
        "saaCpdzZ6SM",
        "qchPLaiKocI",
        "qih-jEFPxFc",
        "owk9KNH0Qdg"
    ],
    "intense" : [
        "qffVd9KmGZo",
        "YW2nvdDpoyA",
        "LhOjN4t0YsY",
        "DLtTukKTtp4",
        "ih5CBeuRW3s",
        "T5XWOOOCg-U",
        "4R1mdXie5sg",
        "LuGAWR2eRyQ",
        "AY7ktU1Db2A",
        "7NZ85Q37Obc"
    ]
}

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

//shuffle(musicPlaylists["chill"])
//shuffle(musicPlaylists["reg"])
//shuffle(musicPlaylists["intense"])

var player
var currentPlaylist = ""
let viewerReady = false

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytPlayer', {
        width: 200,
        height: 200,
        playerVars: {
            'playsinline': 1,
            'origin': 'https://sr64dd.github.io'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    flavourText.innerText = "what'll it be?"
    viewerReady = true
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        currentSong++
        if (currentSong == (musicPlaylists[currentPlaylist]).length) {
            currentSong = 0
        }
        player.loadVideoById(musicPlaylists[currentPlaylist][currentSong])
    }
}

function playMusic(playlist) {
    if (viewerReady) {
        currentPlaylist = playlist
        barDrawer.className = "open"
        if (currentPlaylist == "chill") {
            bartender1.className = "bartender1 sad"
            bartender2.className = "bartender2 happy"
            bartender3.className = "bartender3 sad"
        }
        else if (currentPlaylist == "reg") {
            bartender1.className = "bartender1 happy"
            bartender2.className = "bartender2 sad"
            bartender3.className = "bartender3 sad"
            
        }
        else {
            bartender1.className = "bartender1 sad"
            bartender2.className = "bartender2 sad"
            bartender3.className = "bartender3 happy"
        }
        flavourText.innerText = "excellent choice!"
        player.loadVideoById(musicPlaylists[currentPlaylist][0])
    }
}

function nextSong() {
    if (currentPlaylist != "" && viewerReady) {
        currentSong++
        if (currentSong == (musicPlaylists[currentPlaylist]).length) {
            currentSong = 0
        }
        flavourText.innerText = "maybe you'll fancy this!"
        player.loadVideoById(musicPlaylists[currentPlaylist][currentSong])
    }
}

function stopSong() {
    if (currentPlaylist != "" && viewerReady) {
        barDrawer.className = "closed"
        bartender1.className = "bartender1"
        bartender2.className = "bartender2"
        bartender3.className = "bartender3"
        flavourText.innerText = "what's one more, huh?"
        currentPlaylist = ""
        player.stopVideo()
    }
}

const flavourAd = {
    1 : [
        "gimme something catchy!",
        "gimme something funky!",
        "I want something groovy.",
        "give me something upbeat!",
        "just a light tune, thanks.",
        "how about a nice jam?",
        "nothing hot, nothing cold."
    ],
    2 : [
        "gimme something soothing...",
        "I want something to relax me.",
        "gimme something chill...",
        "how about an ambient one?",
        "how's your quieter stuff?",
        "just something easy, thanks.",
        "give me something mellow."
    ],
    3 : [
        "gimme something that kicks!",
        "I want something frantic!",
        "gimme something real long.",
        "give me all you got!",
        "how about something new?",
        "I'm here for the long haul!",
        "let's party!",
    ]
}

function advertise(tender) {
    if (currentPlaylist == "" && viewerReady) {
        let chosenFlavour = Math.floor(Math.random() * 6)
        flavourText.innerText = flavourAd[tender][chosenFlavour]
    }
}