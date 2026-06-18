let isFirstTime = true

function startMarquee() {
    const messages = [
        "Cruising the Canyon - bazillions of wisdom in 100 pages.",
        "The side buttons don't work yet. Sorry!",
        "Get on Bryce and create something RIGHT NOW!",
        "This thing sure does repeat a lot...",
        "Don't like 'em big? Try the slim or survivalist edition!",
        "@@@@ LISTEN TO ALL OF MY POLITICAL TAKES AND MAKE THEM YOURS WOOOOOOOOO @@@@",
        "‣ Now Playing Song (Remastered) by Guy ‣"
    ];
    let randomString = messages[Math.floor(Math.random() * messages.length)];
    if (isFirstTime) {
        randomString = "Welcome to my website!   Super Render 64 DD  "
        isFirstTime = false
    }
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