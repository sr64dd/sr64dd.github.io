var currentSong = 0
const barDrawer = document.getElementById("musicdrawer")
let bartender1 = document.getElementById("playButton1")
let bartender2 = document.getElementById("playButton2")
let bartender3 = document.getElementById("playButton3")
const flavourText = document.getElementById("bardisplaytext")

let musicPlaylists = {
    "chill" : [
        "AMnvQHD60Ek",
        "CFS8E-ccPAE",
        "HuhDSkJH9cc",
        "jHo0YQuJNhY",
        "D28LNzfQKtc",
        "nBUxr7uiLR0",
        "bNvhCDtfK74",
        "awKDsl2zAk4",
        "nPOvEord2W8",
        "K01qpf7-Rks",
        "fXeKi6ZkbOw",
        "57DKvbDQHPA",
        "MUQE18DiASg",
        "DSxOpx7lEO4",
        "9pkNoI75KGM",
        "juEzbSmWpHQ",
        "vQSI-rUUYqA",
        "tLXb8hwvrp8",
        "GJY03C-JFL4",
        "_CpcWtwdZ1U",
        "xpFC7hK3DW0",
        "F51rnHrEBx8",
        "xbq-Mr6pRsw",
        "Yq3SbXGz8i4",
        "HMOTuRhYgc4",
        "0YJDlzOwPyY",
        "oTlcNrtZX0k",
        "_Ukl2A9YiLg",
        "_WxXi7dvi4c",
        "1TxgfbPl9Qg",
        "KW8Or4BPDQo",
        "wLhLWZuIoBs",
        "e-lyWxjvGKY",
        "WLsnFQvxw3I",
        "pvyLdqbiHVg",
        "TXah7y6XVxg",
        "9q-UHJXQxXk",
        "D6_giwdl0jA",
        "4eJ7k831NQU",
        "81VFzsNRwKA",
        "dwEdWXje50I",
        "r9nJO9I0oFI",
        "uOVCIt5lKSg",
        "DekP3COYGuw",
        "L0qBulm0hbg",
        "muIEJzymPCE",
        "7l3m44fAYAE",
        "oME6YGFLn_k",
        "Wihi-H1Rivs",
        "fhI2kO09syU",
        "3UrBs9_qG7E",
        "8KhS-QVFpcg",
        "ibxHBY-MEGc",
        "DmLRQryHkVA",
        "ORU0K9ZxK_M"
    ],
    "reg" : [
        "saaCpdzZ6SM",
        "qchPLaiKocI",
        "qih-jEFPxFc",
        "owk9KNH0Qdg",
        "44d3CfZrC4o",
        "f8YTa-CvS4w",
        "vKaMhXSJGWo",
        "ye3VdSOG4hQ",
        "PD7KKcbzfaM",
        "0CKe0MUCLqY",
        "rI7yrHXQ_S8",
        "zAsoF18YUlg",
        "OWiVJMgms9E",
        "lqjI4KIuSo8",
        "pigZgNUwiyU",
        "ifKk6Iim0pU",
        "-j1HMu6Z1sA",
        "m0O79CuOUPs",
        "rBxaAEF_24M",
        "dXH_-shZMUg",
        "oxh2cGs7jok",
        "Zu9a29UR2dU",
        "D5UXwMNuq1A",
        "r58GQYFZeLE",
        "3f-jQxceV6o",
        "00dx5w0gqnE",
        "_93PWvC2_vU",
        "id_L5_6fhEw",
        "6Z2xClustQo",
        "8QEHR0V6Ydk",
        "CpUeKH5RAqI",
        "Iju54f4CN8Y",
        "sw1OwMrh7XA",
        "LOeMqXVjga8",
        "lGqVR78vnAg",
        "Gq_twJwXRdU",
        "bJ0Rk3piR44",
        "Gk5RokrBfGk",
        "XfMpN5YT058",
        "FqICKupwP6Y",
        "cROOfFnisDk",
        "N47SWUcYhQU",
        "vB8dweYCLes",
        "efJGDpCSrJY",
        "_nHiX9DdE3U",
        "AsRzDFf5GCA",
        "9FbJw0nlofA",
        "QH2PXqZxZn0",
        "qpgk7DoUz9w",
        "9VjgGIS4yo4",
        "46uFsJpS3yk",
        "iVOzVE_g5kk",
        "AiCqa-tb0do",
        "MFg4wgYPFf4",
        "dNaT5jAZ620",
        "969B9-V_Bac",
        "TounIThLmXw",
        "3WA6Y5uJB7g",
        "DEO1w1YPnoQ",
        "wNjPjh6oIFI",
        "5YbfGwuh570",
        "pJOF5mu91mY",
        "GieQq3eWSnE",
        "Zjqcf5F0YRg",
        "OFNrN_6Ta5I",
        "M5iSEdo5VNI",
        "fpTyBkppvyc",
        "Ck0LO6b6OQc",
        "VZkRAp9XMIg",
        "-38yJGUvBD8",
        "H_J9KtK_1c4",
        "eTaHk10gcOw",
        "-0srGzIW_5w",
        "yrD4yAozRTw",
        "kj4K87jvvyI",
        "TQsKTuKQsoI",
        "9L9XoO4m1uI",
        "5Ed-h8u8a_k",
        "zHQBlaYBUsE",
        "EmTPg8ximPE",
        "BZhhhl2tWNM",
        "fLikBdrgDPg",
        "RtDqbdW8RxI",
        "WjUaB5A8qcA",
        "0wv1eHq-VHY",
        "b6Sw_HmQ8GU",
        "hL3F_oXTb-Q",
        "Wt2sWPIsKOY",
        "u_pt3khMRFs",
        "1j9DfYtJkgk",
        "1FqLJzKllRI",
        "fiD39jo5Yo4",
        "ltxmyVTbKeQ",
        "NcGyScT6kqQ",
        "qY1RvCU0rII",
        "VimNTQ6cU7s",
        "n9DmdAwUbxc",
        "wSMMz55AIcY",
        "1ZfjB5P7RS0",
        "HmoUSSVSV7I",
        "XOI00jtYv2o",
        "i_6Z1VouytE",
        "xFV339D9SsY",
        "0bPU4bdMlqM",
        "h6YlKqYp3xI"
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
        "7NZ85Q37Obc",
        "ifmVski9fkI",
        "Ro8K8qDsYTs",
        "bKzV1pLDNp4",
        "MwMv27wMSAo",
        "DmqK1EKcvCs",
        "NRObQbJiaiQ",
        "em_Iy8YJ82k",
        "LC2WpBcdM_A",
        "-s97_bBGobQ",
        "YVC-AHuSaFM",
        "AxuTd9rwEHQ",
        "sqZKKeXGGG8",
        "7fDu1v0ZzbI",
        "l4L78W66kCI",
        "UywKZcH_Wk0",
        "U0IFg4i62RI",
        "99x3Bv7dfHo",
        "FDlDKvidYbk",
        "9f5fFXx5B9c",
        "HinUbBv3b_Y",
        "QjcA2xSH25Y",
        "cgEifPjDS7E",
        "2hrFnkOcpbg",
        "3pLdV2O6yiI",
        "9NPv_ZsMgIg",
        "440OMdo9MN8",
        "-fgv66f6GK8"
    ],
    "all" : [
        "qB1ucmJSgRE",
        "zF47sDeRYRE",
        "VHKP_OE5iY8",
        "4mmn7siswJY",
        "Gz0fAz9n_Os",
        "peuTnilEv9g",
        "8UrsaKcZHI0",
        "vcaPiiFZu2o",
        "-lRPEny5jug",
        "aaHHR69CJx4",
        "7HAJekLQyd0",
        "JeEA8Na9av0",
        "FY--gYPYJg0",
        "J6O6SmmAdtk",
        "N4ZwLkWrEnY",
        "DFI6cV9slfI",
        "M3tzlaXBRV8",
        "xBRhIsJZ2eU",
        "InHSKiHpmIY",
        "gD_2Bhjj0Hw",
        "vRHQqZAlHTs",
        "M_POSjpOK6s",
        "e3A_9-wxR2o",
        "g5UdJn1-xFA",
        "uD4S_F-pykg",
        "c1YD5Kg-B_M",
        "dsFMnr_uVQs"
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
let viewerReady = false
let allPlaylistShuffled = false

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
    console.log("PLAYER READY");
    flavourText.innerText = "what'll it be?"
    viewerReady = true
    console.log("PLAYER DONE");
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
        else if (currentPlaylist == "intense") {
            bartender1.className = "bartender1 sad"
            bartender2.className = "bartender2 sad"
            bartender3.className = "bartender3 happy"
        }
        else {
            bartender1.className = "bartender1 happy"
            bartender2.className = "bartender2 happy"
            bartender3.className = "bartender3 happy"
            if (!allPlaylistShuffled) {
                musicPlaylists["all"].push.apply(musicPlaylists["all"], musicPlaylists["chill"]);
                musicPlaylists["all"].push.apply(musicPlaylists["all"], musicPlaylists["reg"]);
                musicPlaylists["all"].push.apply(musicPlaylists["all"], musicPlaylists["intense"]);
                shuffle(musicPlaylists["all"])
                allPlaylistShuffled = true
            }
        }

        if (currentPlaylist == "all") {flavourText.innerText = "daring, are we?"}
        else {flavourText.innerText = "excellent choice!"}
        
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
        "nothing hot, nothing cold.",
        "what's your most elegant?"
    ],
    2 : [
        "gimme something soothing...",
        "I want something to relax me.",
        "gimme something chill...",
        "how about an ambient one?",
        "how's your quieter stuff?",
        "just something easy, thanks.",
        "give me something mellow.",
        "bit of anything will do."
    ],
    3 : [
        "gimme something that kicks!",
        "I want something frantic!",
        "gimme something real long.",
        "give me all you got!",
        "how about something new?",
        "I'm here for the long haul!",
        "let's party!",
        "make me confused... please."
    ],
    4 : [
        "gimme the mix!",
        "how's a bit of everything?",
        "I don't care! hit me!",
        "surprise me!",
        "what'd you recommend?",
        "just something random thanks.",
        "let's roll the dice!",
        "I'll have what that guy had."
    ]
}

function advertise(tender) {
    if (currentPlaylist == "" && viewerReady) {
        let chosenFlavour = Math.floor(Math.random() * 7)
        flavourText.innerText = flavourAd[tender][chosenFlavour]
    }
}