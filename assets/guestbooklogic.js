const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5IdfBdQqCJqhzmFUq776IUydeyK_SZcFYbhYfTMUnoVUVz1uStRgerL7cnY3NxOMMFA/exec"

let oldCommentID = localStorage.getItem("commentID");
var replacingSig = false
if (oldCommentID) {
    replacingSig = true
    document.getElementById("submitBtn").innerHTML = "Update Signature"
}
else {
    document.getElementById("invertstick").innerHTML = "Click here to sign my guestbook!"
}

// READ FUNCTION: Handles displaying data on page load
function displayComments(comments) {
    const container = document.getElementById('commentsContainer');
    if (!comments || comments.length === 0) {
        container.innerHTML = "<p>No guest has signed yet. Be the first to sign!</p>";
        return;
    }
    container.innerHTML = "What Visitors Said...<br><br>";
    comments.reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        let reverseHue = -escapeHTML(item.bgColour)
        card.innerHTML = `
                <div class="comment ${escapeHTML(item.rainbowOn)}" style="filter: hue-rotate(${escapeHTML(item.bgColour)}deg); border-image: url(assets/guestbook/stickynote${escapeHTML(item.borderType)}.webp) 12;border-image-repeat: round;">
                        <img class="pin" style="filter: hue-rotate(${escapeHTML(reverseHue)}deg);" src="assets/guestbook/stickynotepin${escapeHTML(item.pinType)}.webp">
                        <b style="padding-left: 4px; color: ${escapeHTML(item.nameColour)};filter: hue-rotate(${escapeHTML(reverseHue)}deg);">${escapeHTML(item.name)}</b>
                        <div class="comment-body" style="filter: hue-rotate(-${escapeHTML(reverseHue)}deg);">
                            <p style="color: ${escapeHTML(item.commentColour)};">${escapeHTML(item.comment)}</p>
                            <canvas style="flex-shrink: 0; filter: hue-rotate(${escapeHTML(reverseHue)}deg); padding-right: 10px;" class="guestStamp" width="16" height="16"></canvas>  
                        </div>
                        
                        <p style="font-size: 12px; filter: hue-rotate(-${escapeHTML(reverseHue)}deg);">${escapeHTML(item.datetime).slice(0, 10)}</p>
                    </div>
            `;
        if (!item.pixelArt || !item.pixelArt.includes("1")) {
            card.innerHTML = `
                <div class="comment ${escapeHTML(item.rainbowOn)}" style="filter: hue-rotate(${escapeHTML(item.bgColour)}deg); border-image: url(assets/guestbook/stickynote${escapeHTML(item.borderType)}.webp) 12;border-image-repeat: round;">
                        <img class="pin" style="filter: hue-rotate(${escapeHTML(reverseHue)}deg);" src="assets/guestbook/stickynotepin${escapeHTML(item.pinType)}.webp">
                        <b style="padding-left: 4px; color: ${escapeHTML(item.nameColour)};filter: hue-rotate(${escapeHTML(reverseHue)}deg);">${escapeHTML(item.name)}</b>
                        <div class="comment-body" style="filter: hue-rotate(-${escapeHTML(reverseHue)}deg);">
                            <p style="color: ${escapeHTML(item.commentColour)};">${escapeHTML(item.comment)}</p>
                        </div>
                        
                        <p style="font-size: 12px; filter: hue-rotate(-${escapeHTML(reverseHue)}deg);">${escapeHTML(item.datetime).slice(0, 10)}</p>
                    </div>
            `;
        }
        container.appendChild(card);
        const stampCanvas = card.querySelector('.guestStamp');

        if (item.pixelArt && item.pixelArt.includes("1")) {
            drawSavedStamp(stampCanvas, item.pixelArt, item.pixelArtFG)
        }
        const br = document.createElement('br');
        container.appendChild(br);
    });
}

// Automatically load existing comments on page load
const loadScript = document.createElement('script');
loadScript.src = `${GOOGLE_SCRIPT_URL}?callback=displayComments`; 
document.body.appendChild(loadScript);


// Handle Submission Response
function handleSubmissionResponse(response) {
    const statusText = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
                
    if (response.status === "success") {
        statusText.style.color = "green";
        statusText.innerText = response.message;
        localStorage.setItem("commented", true);
        document.getElementById("guestbookForm").remove()
    } else {
        statusText.style.color = "red";
        statusText.innerText = response.message;
    }
    submitBtn.disabled = false;
                
    // Clean up
    const tempScript = document.getElementById('tempSubmitScript');
    if (tempScript) tempScript.remove();
}

// Save Guestbook signature
document.getElementById('guestbookForm').addEventListener('submit', function(e) {
    e.preventDefault();
                
    const submitBtn = document.getElementById('submitBtn');
    const statusText = document.getElementById('formStatus');
                
    submitBtn.disabled = true;
    statusText.style.display = "block";
    statusText.innerText = "Saving your entry...";

    let name = encodeURIComponent(document.getElementById('name').value);
    name = name.slice(0, 30)
    let comment = encodeURIComponent(document.getElementById('comment').value);
    comment = comment.slice(0, 500)
    let nameColour = encodeURIComponent(document.getElementById('nameColour').value);
    let commentColour = encodeURIComponent(document.getElementById('commentColour').value);
    let borderType = encodeURIComponent(document.getElementById('borderType').value);
    const bgColour = encodeURIComponent(document.getElementById('bgColour').value);
    let pinType = encodeURIComponent(document.getElementById('pinType').value);
    const pixelArt = encodeURIComponent(getStampData());
    let pixelArtFG = encodeURIComponent(document.getElementById('pixelArtFG').value);
    let rainbow = ""
    if (document.getElementById('rainbow').checked) {rainbow = "rbowslow"}

    let commentID = localStorage.getItem("commentID");
    if (!commentID) {
        commentID = crypto.randomUUID();
        localStorage.setItem("commentID", commentID);
    }
    
    let submissionUrl = ""
    if (replacingSig) {
        submissionUrl = `${GOOGLE_SCRIPT_URL}?action=replace&name=${name}&comment=${comment}&nameColour=${nameColour}&commentColour=${commentColour}&borderType=${borderType}&bgColour=${bgColour}&rainbowOn=${rainbow}&pinType=${pinType}&pixelArt=${pixelArt}&pixelArtFG=${pixelArtFG}&commentID=${encodeURIComponent(commentID)}&callback=handleSubmissionResponse`;
    }
    else {
        submissionUrl = `${GOOGLE_SCRIPT_URL}?name=${name}&comment=${comment}&nameColour=${nameColour}&commentColour=${commentColour}&borderType=${borderType}&bgColour=${bgColour}&rainbowOn=${rainbow}&pinType=${pinType}&pixelArt=${pixelArt}&pixelArtFG=${pixelArtFG}&commentID=${encodeURIComponent(commentID)}&callback=handleSubmissionResponse`;
    }


    const submitScript = document.createElement('script');
    submitScript.id = 'tempSubmitScript';
    submitScript.src = submissionUrl;
    document.body.appendChild(submitScript);
});

// Helper to prevent script injection (XSS)
function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}