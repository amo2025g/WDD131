const games = [
    {
        title: "YURI'S TAFFY QUIZ",
        description: "Take a short quiz and discover which type of creative idea best matches you.",
        image: "https://placehold.co/220x180?text=Quiz",
        button: "Start Quiz"
    },
    {
        title: "YURI'S PEPPERMINT WHEEL",
        description: "Spin the wheel and receive a completely random creative prompt.",
        image: "https://placehold.co/220x180?text=Wheel",
        button: "Spin"
    },
    {
        title: "CANDY HEARTS STORY GENERATOR",
        description: "Generate a setting, characters, conflict, and story prompt instantly.",
        image: "https://placehold.co/220x180?text=Story",
        button: "Generate"
    }
];

const content = document.querySelector("#content");
games.forEach(game => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML =
        `<img class="game-image" src="${game.image}" alt="${game.title}">
        <div>
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <button>${game.button}</button>
        </div>`;
    content.appendChild(card);
});