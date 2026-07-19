const ideaList = document.querySelectorAll("#ideaList li");
const checklist = document.querySelector("#checklist");
const wheel = document.querySelector("#wheel");
const wheelText = document.querySelector("#wheelText");
const spinBtn = document.querySelector("#spinBtn");
const result = document.querySelector("#result");
let ideas = [];


let rotation = 0;
ideaList.forEach(item => {
    ideas.push(item.textContent);
});

ideas.forEach(idea => {
    const label = document.createElement("label");
    label.innerHTML = `
        <input type="checkbox" value="${idea}" checked>
        ${idea}
    `;
    checklist.appendChild(label);
});

function getSelectedIdeas() {
    const checked =
        document.querySelectorAll("#checklist input:checked");
    return Array.from(checked).map(item => item.value);
}

spinBtn.addEventListener("click", () => {

    const selected = getSelectedIdeas();
    if (selected.length === 0) {
        result.textContent = "Choose at least one idea!";
        return;
      }
    const randomIndex =
        Math.floor(Math.random() * selected.length);
    const winner = selected[randomIndex];
    rotation += 1440 + Math.floor(Math.random() * 360);
    wheel.style.transform =
        `rotate(${rotation}deg)`;
    setTimeout(() => {
        wheelText.textContent = winner;
        result.textContent =
            "Your idea: " + winner;
    }, 4000);
});
