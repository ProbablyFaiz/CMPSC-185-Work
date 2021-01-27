function validateEmail() {
    const emailRegex = /.+@.+\.(com|edu)/;
    const statusDiv = document.getElementById("email-validation-status");
    if (emailRegex.test(document.getElementById('email').value)) {
        statusDiv.innerHTML = "Email successfully recorded.";
    } else {
        statusDiv.innerHTML = "Invalid email address.";
    }
}
