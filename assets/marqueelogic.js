let isFirstTime = true

function startMarquee() {
    const messages = [
        "Cruising the Canyon - bazillions of wisdom in 100 pages.",
        "The side buttons don't work yet. Sorry!",
        "Get on Bryce and create something RIGHT NOW!",
        "This thing sure does repeat a lot...",
        "Don't like 'em big? Try the slim or survivalist edition!",
        "@@@@ LISTEN TO ALL OF MY POLITICAL TAKES AND MAKE THEM YOURS WOOOOOOOOO @@@@",
        "‣ Now Playing Song (Remastered) by Guy ‣",
        "Don't you dare go look at my hideous code.",
        "undefined  denifednu",
        "Isn't this kinda paradoxical? Having a website made in 2026 look like this?",
        "There is nothing at sr64dd.github.io/xxx.html, so don't look.",
        "If this marquee was a person it would be everyone's favourite.",
        "Bryce 3D materials tierlist coming never.",
        "Sure! Here's 10 funny jokes that will have your readers rolling on the floor laughing! --- Knock knock. Who's there? An owl. Who? You! --- If you'd like more crass jokes or something that tugs at the heartstrings, let me know. You're bound to make someone laugh.",
        "√ Well, that's what they said yesterday. There's nothin' left to do but pray. I think it's time I found a new religion. Whoa, it's so insane to synthesize another strain. There's something in these futures that we have to be told! √",
        "Look at that! Now I'm blue!",
        'Are you a "the odds are 50/50 either way" person or a "the odds become 2/3 if you switch" person?',
        "√ If you're looking for the life that's in you (whatchu do?) And you tryna figure how you gon' do. Let the Guiding Lights take ya. √",
        "Sweet mother of pearl. Some people, I tell ya, some people..."
    ];
    let randomString = messages[Math.floor(Math.random() * messages.length)];
    if (isFirstTime) {
        randomString = "Welcome to my website!   Super Render 64 DD  "
        isFirstTime = false
    };
    if (safeMarquee) {
        randomString = "Download Cruising the Canyon below! There are three different versions to choose from, each varying in size and content. If you only wish to read and not download, go to the Revised Edition. If you want a smaller version or intend on sharing the book to others, try the other lightweight options. Thank you for reading!"
    };
    marq1.textContent = randomString;
    
    requestAnimationFrame(() => {
        marq1.style.animation = "none";
        marq1.offsetHeight; 

        const containerWidth = marquee.offsetWidth;
        const textWidth = marq1.scrollWidth;
        const distance = containerWidth + textWidth;
        const duration = distance / 130;

        marq1.style.setProperty("--start-x", `${containerWidth}px`);
        marq1.style.setProperty("--end-x", `${-textWidth}px`);
        
        marq1.style.animation = `marquee-content ${duration}s linear forwards`;
    })
}

startMarquee();
marq1.addEventListener("animationend", startMarquee);