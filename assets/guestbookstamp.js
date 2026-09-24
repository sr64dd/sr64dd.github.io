const stampCanvas = document.getElementById('stampCanvas');
const stampCtx = stampCanvas.getContext('2d');

var currentColour = 1

stampCtx.imageSmoothingEnabled = false;
stampCtx.fillStyle = "white";
stampCtx.fillRect(0, 0, 16, 16);

function swapColours() {
    if (currentColour == 0) {
        currentColour = 1
    }
    else {
        currentColour = 0
    }
}

function drawStampPixel(e) {
    const rect = stampCanvas.getBoundingClientRect();
    const x = Math.floor(
        (e.clientX - rect.left) / rect.width * 16
    );
    const y = Math.floor(
        (e.clientY - rect.top) / rect.height * 16
    );
    if (currentColour == 0) {
        stampCtx.fillStyle = "white";
    }
    else {
        stampCtx.fillStyle = "black";
    }
    stampCtx.fillRect(x, y, 1, 1);
}

let stampDrawing = false;
stampCanvas.addEventListener('pointerdown', function(e) {
    stampDrawing = true;
    stampCanvas.setPointerCapture(e.pointerId);
    drawStampPixel(e);
});

stampCanvas.addEventListener('pointermove', function(e) {
    if (stampDrawing) {
        drawStampPixel(e);
    }
});

stampCanvas.addEventListener('pointerup', function() {
    stampDrawing = false;
});

stampCanvas.addEventListener('pointercancel', function() {
    stampDrawing = false;
});

document.getElementById('clearStamp').addEventListener('click', function() {
    stampCtx.fillStyle = "white";
    stampCtx.fillRect(0, 0, 16, 16);
});

function getStampData() {
    const pixels = stampCtx.getImageData(0, 0, 16, 16).data;
    let result = "";
    for (let i = 0; i < 256; i++) {
        const red = pixels[i * 4];
        if (red < 128) {
            result += "1";
        } else {
            result += "0";
        }
    }
    return result;
}

function drawSavedStamp(canvas, stampData, fgColour) {
    if (!stampData) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 16, 16);
    for (let i = 0; i < 256; i++) {
        if (stampData[i] === "1") {
            const x = i % 16;
            const y = Math.floor(i / 16);
            ctx.fillStyle = fgColour;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}