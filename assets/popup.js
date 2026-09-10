
    var safeMarquee = false

    const tooltip = document.getElementById("tooltip");
    const tooltipImage = document.getElementById("tooltip-image");
    const tooltipDescription = document.getElementById("tooltip-description");

    document.querySelectorAll(".tooltip-link").forEach(link => {

        link.addEventListener("mouseenter", () => {
            tooltipDescription.textContent = link.dataset.description;

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
