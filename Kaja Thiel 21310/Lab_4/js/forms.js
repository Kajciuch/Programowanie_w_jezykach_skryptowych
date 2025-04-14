function checkForm() {
    let validName = validateName();
    let validEmail = validateEmail();
    let validInfo = validateInfo();
    return validName && validEmail && validInfo;
}

function validateName() {
    const name = document.getElementById("contactName");
    const error = document.getElementById("errorName");
    const group = document.getElementById("groupName");

    if (name.value.trim() === "") {
        error.className = "text-danger";
        name.classList.add("is-invalid");
        group.classList.add("has-error");
        return false;
    } else {
        error.className = "hide";
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("contactEmail");
    const error = document.getElementById("errorEmail");
    const group = document.getElementById("groupEmail");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (email.value.trim() === "") {
        error.innerHTML = "Podanie adresu email jest wymagane!";
        error.className = "text-danger";
        email.classList.add("is-invalid");
        return false;
    } else if (!regex.test(email.value)) {
        error.innerHTML = "Błędny format adresu email!";
        error.className = "text-danger";
        email.classList.add("is-invalid");
        return false;
    } else {
        error.className = "hide";
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        return true;
    }
}

function validateInfo() {
    const info = document.getElementById("contactInfo");
    const error = document.getElementById("errorInfo");
    const group = document.getElementById("groupInfo");

    if (info.value.trim() === "" || info.value.length > 250) {
        error.className = "text-danger";
        info.classList.add("is-invalid");
        return false;
    } else {
        error.className = "hide";
        info.classList.remove("is-invalid");
        info.classList.add("is-valid");
        return true;
    }
}
