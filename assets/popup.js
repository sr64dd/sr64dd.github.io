const tooltip = document.getElementById("tooltip");
const tooltipImage = document.getElementById("tooltip-image");
const tooltipDescription = document.getElementById("tooltip-description");

document.querySelectorAll(".tooltip-link").forEach(link => {

    link.addEventListener("mouseenter", () => {
        let datadesc = link.dataset.description;
        tooltipDescription.textContent = datadesc;
        switch (datadesc) {
            case "video":
                tooltipDescription.textContent = "Animation";
                break;
            case "noaudio":
                tooltipDescription.textContent = "No Audio";
                break;
            case "sjm":
                tooltipDescription.textContent = "Supreno Jami Martar";
                break;
            case "demo":
                tooltipDescription.textContent = "Demo/Practice Animation";
                break;
            case "series":
                tooltipDescription.textContent = "Part of a Series";
                break;
            case "tiny":
                tooltipDescription.textContent = "Teeny Tiny";
                break;
            case "bumper":
                tooltipDescription.textContent = "Bumper/Transitional";
                break;
            default:
                tooltipDescription.textContent = datadesc;
                break;
        }


        if (link.dataset.image) {
            tooltipImage.src = link.dataset.image;
            tooltipImage.style.display = "flex";
        } else {
            tooltipImage.style.display = "none";
        }

        tooltip.style.display = "flex";
    });

    link.addEventListener("mousemove", event => {
        tooltip.style.left = (event.clientX + 15) + "px";
        tooltip.style.top = (event.clientY + 15) + "px";
    });

    link.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});