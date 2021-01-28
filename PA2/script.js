function validateEmail() {
    const emailRegex = /.+@.+\.(com|edu)/;
    const statusDiv = document.getElementById("email-validation-status");
    if (emailRegex.test(document.getElementById('email').value)) {
        statusDiv.innerHTML = "Email successfully recorded.";
    } else {
        statusDiv.innerHTML = "Invalid email address.";
    }
}

document.onscroll = () => {
    const scrollFraction = window.pageYOffset / window.innerHeight;
    const existingElement = document.getElementById("scroll-button");
    if (scrollFraction > 0.25) {
        if (existingElement) {
            existingElement.style.opacity = "1";
            return;
        }
        const element = document.createElement("button");
        element.id = "scroll-button"
        element.innerHTML = "Scroll to top"
        element.onclick = () => {
            window.scrollTo(0, 0);
        }
        document.body.appendChild(element);
    } else if (existingElement) {
        existingElement.style.opacity = "0";
    }
}

document.querySelectorAll(".photo-item").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();
        const modal = document.getElementById("media-modal");
        const modalContent = document.getElementById("modal-content");
        const mediaNode = event.target.cloneNode(true);
        console.log(mediaNode.tagName);
        if (mediaNode.tagName === "VIDEO") {
            mediaNode.setAttribute("controls", true);
        }
        mediaNode.style.margin = "0 auto";
        modalContent.append(mediaNode);
        modal.style.display = "block";
    });
});

document.querySelectorAll("#media-modal").forEach((item) => {
    item.addEventListener("click", (event) => {
        const modal = document.getElementById("media-modal");
        const modalContent = document.getElementById("modal-content");
        modal.style.display = "none";
        modalContent.innerHTML = "";
    });
});

document.querySelectorAll("#modal-content").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});
