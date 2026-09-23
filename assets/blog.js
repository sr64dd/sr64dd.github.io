var blogPosts = {
    0 : {
        "title" : "00. Oh wow cool new thing!",
        "date" : "22/09/26",
        "body" : `Isn't this page something! Take it all in, the Comic Sans, the animated border... just beautiful.
                        <br><br>This page is going to have more personal stuff on it like plans I have for this website and other stuff too. I guess it would be more fitting to be a blog instead of a newsletter but I won't keep it strictly about me. No one is going to see this anyways, but in 2050 if the internet isn't defunked or infested with political nausea or only populated by 1% organic life and 99% bots, maybe someone will click on this page and read my stuff and look at my renders, and maybe feel just a bit nostalgic.
                        <br><br>Sorry to start off so grim, but I'd rather know my stuff isn't popular than wonder why my swarm of fans haven't manifested yet.
                        <br><br>Speaking of fans, the reason why this page looks like old IE puked its guts out during a colourblind christmas is just because I like the old internet look of crappy but pure websites made by individuals. I can't say I'm nostalgic for it but I do prefer it over the corporate sanitized designs you'll see on popular sites of now like YouTube and Instagram, which only look appealing because of the user generated content that takes up most of the page.
                        <br><br>It's like when people see a drawing and say "at least it's not AI." I personally think that's kind of a backhanded compliment, akin to something like "at least he did it on paper and not the walls," but obviously the meaning of the phrase is that even the most perfect creation is nothing without the human touch, and dinky websites that abuse Comic Sans (like I'm doing right now) are good examples of that.
                        <br><br>So I guess this is the kind of stuff to expect from this newsletter. The occasional things about the site compounded with ramblings too large to fit on the marquee.
                        <br><br>If you're here for Bryce 3D stuff only, this is probably the page where you'll find it the least. I recommend reading <a class="oldpost" href="index.html">CTC</a> or downloading my packs if you haven't already and you want to. Or hell, just go render something. I'm planning a lot for this site because right now it's just kinda barren. Sure there's the Animations page and some of my renders on the gallery page, but still it's just... empty.
                        <br><br>Well I say no more emptiness! I'm gonna make animations, and renders, and new tutorials like <a class="oldpost" href="assets/pdfversions/Installing Bryce 3 Tutorial.pdf">this one,</a> and games and more 3DS themes with Jamiroquai music and so many Bryce presets. This site will be prosperous, filled with so many goodies.
                        <br><br>See you in the next newsletter! I promise it won't be as long as this one probably maybe.`
    },
    1 : {
        "title" : "01. Can it get any better?",
        "date" : "23/09/26",
        "body" : `On Instagram I saw a post about <a class="oldpost" href="https://guyhilism.neocities.org/">a website</a> by the artist <a class="oldpost" href="https://www.instagram.com/shitshow_1.0/">shitshow_1.0</a> which is probably one of the coolest websites I've seen on the internet. Every pixel of the page is filled with charm, including the home page which happened to feature a board where you can post comments. That got me thinking about guestbooks that older websites had where visitors would leave a comment for your page.
                        <br><br>Unfortunately now that I've thought about it, I'm obsessed. "I want it! It's everything!"
                        <br><br>I'm writing this in advance because I know it will take a shit ton of time and frustration to make, but I think it's the perfect addition to the site's more personal change.
                        <br><br>I also want a viewcounter on the same page. Usually I'm opposed to metrics, I just see them as something to obsess over and get upset when they don't change. However I'm coming to terms with the idea that this site is primarily for me. If I want it, I just do it. So the viewcounter will be added!
                        <br><br>I'm using <a class="oldpost" href="https://fdiengdoh.neocities.org/how-i-created-my-guestbook">this tutorial by Farlando Diengdoh,</a> if it works out I'll also add the site to the Credits page. Otherwise I guess it's here.
                        <br><br>Hopefully the next update is either once the guestbook is done or not tomorrow.`
    }
}

const titleElem = document.getElementById("blogtitle")
const bodyElem = document.getElementById("blogbody")
var currentBlog = Object.keys(blogPosts).length - 1

function changeBlog(blogNum) {
    let blogTitle = blogPosts[blogNum].title
    let blogBody = blogPosts[blogNum].body
    let blogDate = blogPosts[blogNum].date
    titleElem.innerHTML = blogTitle
    bodyElem.innerHTML = blogBody
    document.getElementById("date").innerHTML = blogDate
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

let currentBlogPast = 0

function genPastList() {
    const pastlist = document.getElementById("pastlist")

    for (var key in blogPosts) {
        // skip loop if the property is from prototype
        if (!blogPosts.hasOwnProperty(key)) continue;

        var obj = blogPosts[key];
        
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;

            // your code
            

            if (prop == "title") {
                pastlist.innerHTML += '<li><a class="oldpost" onclick="changeBlog('+currentBlogPast+')">'+obj[prop]+'</a></li>'
                currentBlogPast++
            }
        }
    }

}

genPastList()
changeBlog(currentBlog)