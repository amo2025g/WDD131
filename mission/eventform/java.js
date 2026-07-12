const form = document.querySelector("#ticketForm");
const type = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const output = document.querySelector("#ticketOutput");
const errors = document.querySelector("#errors");
const eventDate = document.querySelector("#eventDate");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
eventDate.min = tomorrow.toISOString().split("T")[0];

function updateExtraField() {
    const value = type.value;
    if (value === "Student") {
        extraField.hidden = false;
        extraLabel.textContent = "Student ID";
        extraInput.placeholder = "123456789";
    }
    else if (value === "Guest") {
        extraField.hidden = false;
        extraLabel.textContent = "Access Code";
        extraInput.placeholder = "EVENT131";
    }
    else {
        extraField.hidden = true;
        extraInput.value = "";
    }
}

type.addEventListener("change", updateExtraField);
updateExtraField();
function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(value);
    return chosen <= today;
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    errors.textContent = "";
    output.textContent = "";
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const userType = form.type.value;
    const date = form.eventDate.value;
    const extra = form.extraInput.value.trim();
    
    if (userType === "Student") {
        if (!/^\d{9}$/.test(extra)) {
            errors.textContent = "Student ID must be 9 digits.";
            return;
        }
    }
    if (userType === "Guest") {
        if (extra !== "EVENT131") {
            errors.textContent = "Access Code must be EVENT131.";
            return;
        }
    }
    if (isPastDate(date)) {
        errors.textContent = "Please choose a future date.";
        return;
    }
    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${userType}</p>
        <p>${date}</p>
    `;
    form.reset();
    updateExtraField();
});