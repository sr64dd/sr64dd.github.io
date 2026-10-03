// Using Google App Script for guestbook
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfWyGVbSVgp43LxOQ9qLfoLYKypGrjCIZi7SZNzUEwB-ITXMtAz9KKFvKDMhXOKeg2Dg/exec";
let commentID = localStorage.getItem("commentID");
if (commentID) {
    document.getElementById("invertedsticky").innerHTML = "Thank you for signing! <i>Update Signature?</i>"
}

// READ FUNCTION: Handles displaying data on page load
function displayComments(comments) {
    const container = document.getElementById('commentsContainer');
    if (!comments || comments.length === 0) {
        container.innerHTML = "<p>No guest has signed yet. Be the first to sign!</p>";
        return;
    }
    container.innerHTML = "";
    comments.reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `
                <div class="commentNote">
                    <img class="commentPin" src="assets/guestbook/stickynotepin${escapeHTML(item.pin)}.webp">
                    <div class="commentName" style="color: ${escapeHTML(item.nameColour)};">${escapeHTML(item.name)}</div>
                    <div class="commentDesc">${escapeHTML(item.comment)}</div>
                    <br>
                    <div class="commentDate">${escapeHTML((item.date).slice(0, 10).replace(/-/g,"/"))}</div>
                </div>
            `;
        container.appendChild(card);
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
        document.getElementById('guestbookForm').reset();
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

    const name = encodeURIComponent(document.getElementById('name').value);
    const nameColour = encodeURIComponent(document.getElementById('nameColour').value);
    const comment = encodeURIComponent(document.getElementById('comment').value);
    const pin = encodeURIComponent(document.getElementById('pinType').value);
    let commentID = localStorage.getItem("commentID");
    let submissionUrl = ""
    if (!commentID) {
        commentID = crypto.randomUUID();
        localStorage.setItem("commentID", commentID);
        submissionUrl = `${GOOGLE_SCRIPT_URL}?name=${name}&nameColour=${nameColour}&comment=${comment}&pin=${pin}&commentID=${encodeURIComponent(commentID)}&callback=handleSubmissionResponse`;
    }
    else {
        submissionUrl = `${GOOGLE_SCRIPT_URL}?action=replace&name=${name}&nameColour=${nameColour}&comment=${comment}&pin=${pin}&commentID=${encodeURIComponent(commentID)}&callback=handleSubmissionResponse`;
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