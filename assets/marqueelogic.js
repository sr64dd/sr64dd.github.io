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
        "Sweet mother of pearl. Some people, I tell ya, some people...",
        'I believe "ai art" is art if the "t" is stupid, "i" is yes, "r" is are, and "a" is you.',
        "Don't go looking at the github repository! It'll ruin the magic!",
        "TEST TEST... ABDC., () xxx has Released! 0123ABDC., () xxx has Released! 0123... TEST OVER",
        "What's the derivative of 64/3 * d^3?",
        "Guys, I have a confession... none of my renders were made in Bryce... I use UE5 for all of my works... please forgive me.",
        "Bag some goodies! Bag them! NOW!",
        "Listen to me carefully. You and only you can see this marquee. A very special item is located in Hilbert's Leisure Centre. Pool 64. Meet me there.",
        "3D Rendered marble vaporave knight to d64...",
        "CONGRATS!!!! You are visitor [64 DD] and have won a complimentary 500 MATERIALS for Bryce! Send over your details to redeem your prize!",
        "VIRUS DETECTED! VIRUS DETECTED! EVACUATE!",
        ";====_+==}=]|s$$NM!L++++===-=----==",
        "=[=======-- En guarde!",
        "Little steps lead to big change or something idk.",
        "Software reveal at 100K Followers!",
        "If your arm got cut off, would it hurt? Keep in mind, the nerves are cut off with it, and also in this scenario size does affect the pain. Also, Pinocchio's nose will not shrink back if he tells the truth. Additionally, the cut is instantaneous and performed via laser. And if you still can't reach a consensus, remember that chickens have been able to survive for a few minutes after their heads have been cut off. Take your time to think of an answer.",
        "What -core is this website?",
        "This site's a whole lotta nothing, huh?",
        "Always remember any texture can be a good cloud!",
        "My favourite colour is #3b5c0c",
        "For the longest time, the human character with brown hair and grey shirt had no name. How odd to me and me only...",
        "This marquee has been subtle foreshadowing for something huge.",
        "I hope you're having a splendid day."
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