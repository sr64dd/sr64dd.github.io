var blogPosts = {
    0 : {
        "title" : "00. Oh wow cool new thing!",
        "body" : `Isn't this page something! Take it all in, the Comic Sans, the animated border... just beautiful.
                        <br><br>This page is going to have more personal stuff on it like plans I have for this website and other stuff too. I guess it would be more fitting to be a blog instead of a newsletter but I won't keep it strictly about me. No one is going to see this anyways, but in 2050 if the internet isn't defunked or infested with political nausea or only populated by 1% organic life and 99% bots, maybe someone will click on this page and read my stuff and look at my renders, and maybe feel just a bit nostalgic.
                        <br><br>Sorry to start off so grim, but I'd rather know my stuff isn't popular than wonder why my swarm of fans haven't manifested yet.
                        <br><br>Speaking of fans, the reason why this page looks like old IE puked its guts out during a colourblind christmas is just because I like the old internet look of crappy but pure websites made by individuals. I can't say I'm nostalgic for it but I do prefer it over the corporate sanitized designs you'll see on popular sites of now like YouTube and Instagram, which only look appealing because of the user generated content that takes up most of the page.
                        <br><br>It's like when people see a drawing and say "at least it's not AI." I personally think that's kind of a backhanded compliment, akin to something like "at least he did it on paper and not the walls," but obviously the meaning of the phrase is that even the most perfect creation is nothing without the human touch, and dinky websites that abuse Comic Sans (like I'm doing right now) are good examples of that.
                        <br><br>So I guess this is the kind of stuff to expect from this newsletter. The occasional things about the site compounded with ramblings too large to fit on the marquee.
                        <br><br>If you're here for Bryce 3D stuff only, this is probably the page where you'll find it the least. I recommend reading <a class="oldpost" href="index.html">CTC</a> or downloading my packs if you haven't already and you want to. Or hell, just go render something. I'm planning a lot for this site because right now it's just kinda barren. Sure there's the Animations page and some of my renders on the gallery page, but still it's just... empty.
                        <br><br>Well I say no more emptiness! I'm gonna make animations, and renders, and new tutorials like <a class="oldpost" href="assets/pdfversions/Installing Bryce 3 Tutorial.pdf">this one,</a> and games and more 3DS themes with Jamiroquai music and so many Bryce presets. This site will be prosperous, filled with so many goodies.
                        <br><br>See you in the next newsletter! I promise it won't be as long as this one probably maybe.`
    }
}

const titleElem = document.getElementById("blogtitle")
const bodyElem = document.getElementById("blogbody")
var currentBlog = Object.keys(blogPosts).length - 1

function changeBlog(blogNum) {
    let blogTitle = blogPosts[blogNum].title
    let blogBody = blogPosts[blogNum].body
    titleElem.innerHTML = blogTitle
    bodyElem.innerHTML = blogBody
    document.getElementById("tabtitle").innerHTML = "Newsletter - " + currentBlog + " - sr64dd"
}

function incrementBlog(indexAdder) {
    if (indexAdder == -1 && currentBlog > 0) {
        currentBlog += indexAdder; 
        changeBlog(currentBlog);
    }
    else if (indexAdder == 1 && currentBlog < (Object.keys(blogPosts).length-1)) {
        currentBlog += indexAdder; 
        changeBlog(currentBlog);
    }
}

changeBlog(currentBlog)