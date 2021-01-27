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
            existingElement.style.opacity = 1;
            return;
        }
        const element = document.createElement("button")
        element.classList.add("scroll-button");
        element.id = "scroll-button"
        element.innerHTML = "Scroll to top"
        element.onclick = () => {
            window.scrollTo(0, 0);
        }
        document.body.appendChild(element);
        console.log("scrolly scroll");
    } else {
        existingElement.style.opacity = "0";
    }
}
