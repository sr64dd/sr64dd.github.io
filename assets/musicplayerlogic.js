var currentSong = 0
const barDrawer = document.getElementById("musicdrawer")

const musicPlaylists = {
    "chill" : [
        "AMnvQHD60Ek",
        "CFS8E-ccPAE",
        "30E2YONbik",
        "HuhDSkJH9cc"
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
        "DLtTukKTtp4"
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

shuffle(musicPlaylists["chill"])
shuffle(musicPlaylists["reg"])
shuffle(musicPlaylists["intense"])

var player
var currentPlaylist = ""

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
    document.getElementById("playButton").disabled = false
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        currentSong++
        player.loadVideoById(musicPlaylists[currentPlaylist][currentSong])
    }
}

function playMusic(playlist) {
    currentPlaylist = playlist
    barDrawer.className = "open"
    player.loadVideoById(musicPlaylists[currentPlaylist][0])
}

function nextSong() {
    currentSong++
    player.loadVideoById(musicPlaylists[currentPlaylist][currentSong])
}

function stopSong() {
    barDrawer.className = "closed"
    player.stopVideo()
}