document.getElementById("sidebar").innerHTML = `<rbow class="rbow"><div class="linkbutton sr64ddlink"><b><i>Super Render 64 DD</i></b></div></rbow>
                <a href="index.html"><div class="linkbutton linkbuttona"><b><i>Cruising the Canyon</i></b></div></a>
                <a href="gall.html"><div class="linkbutton linkbuttona"><b><i>Gallery</i></b></div></a>
                <a href="anim.html"><div class="linkbutton linkbuttona"><b><i>Animations</i></b></div></a>
                <a href="stuff.html"><div class="linkbutton linkbuttona"><b><i>Other Stuff</i></b></div></a>
                <a href="about.html"><div class="linkbutton linkbuttona"><b><i>About</i></b></div></a>
                <a href="links.html"><div class="linkbutton linkbuttona"><b><i>Bryce Links</i></b></div></a>
                <a href="credit.html"><div class="linkbutton linkbuttona credbutton"><b><i>Credits</i></b></div></a>
                <div class="bottomsidebar"><a class="guestbook" href="guestbook.html"></a><a class="clipboard" href="tally.html"></a></div>`;

if (includeMusicPlayer) {
    document.getElementById("rightside").innerHTML += `<br>
                <div id="musicplayerbar">
                    <div id="bar" style="line-height: 0px;">
                        <img src="assets/bar/bartemp.webp" draggable="false">
                        <p id="bardisplaytext"></p>
                        <img class="nextsongbutton" style="position: absolute; top: 62px; left: 260px;" id="nextbutton" onclick="nextSong()" src="assets/bar/nextoff.webp" draggable="false">
                        <img class="stopsongbutton" style="position: absolute; top: 62px; left: 330px;" id="stopbutton" onclick="stopSong()" src="assets/bar/stopoff.webp" draggable="false">
                        <img class="bartender1" id="playButton1" onclick="playMusic('reg')" onmouseover="advertise(1)" style="position: absolute; top: 1px; left: 25px;" src="assets/bar/bartenders/bartender1_idle.webp" draggable="false">
                        <img class="bartender2" id="playButton2" onclick="playMusic('chill')" onmouseover="advertise(2)" style="position: absolute; top: 3px; left: 85px;" src="assets/bar/bartenders/bartender2_idle.webp" draggable="false">
                        <img class="bartender3" id="playButton3" onclick="playMusic('intense')" onmouseover="advertise(3)" style="position: absolute; top: 2px; left: 155px;" src="assets/bar/bartenders/bartender3_idle.webp" draggable="false">
                    </div>
                    <div id="musicdrawer">
                        <div id="ytPlayer" class="playerframe"></div>
                    </div>
                </div>`
}