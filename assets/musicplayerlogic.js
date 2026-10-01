var currentSong = 0
const barDrawer = document.getElementById("musicdrawer")

const musicPlaylist = [
    "_WxXi7dvi4c",
    "3f-jQxceV6o"
]

var player;

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
        player.loadVideoById(musicPlaylist[currentSong])
    }
}

function playMusic() {
    barDrawer.className = "open"
    player.loadVideoById(musicPlaylist[0])
}

function nextSong() {
    currentSong++
    player.loadVideoById(musicPlaylist[currentSong])
}

function stopSong() {
    barDrawer.className = "closed"
    player.stopVideo()
}