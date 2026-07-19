const games = [
    {
        title: "YURI'S TAFFY QUIZ",
        description: "Have no idea what to make but know what you tend to write? Take a short quiz and discover which type of creative prompt best best suits you.",
        image: "images/taffy.png",
        button: "Start Quiz",
        href: "quiz.html"
    },
    {
        title: "YURI'S PEPPERMINT WHEEL",
        description: "Spin the wheel and receive a completely random creative idea.",
        image: "images/peppermint.png",
        button: "Spin",
        href: "spin-the-wheel.html"
    },
    {
        title: "CANDY HEARTS STORY GENERATOR",
        description: "Generate a setting, characters, conflict, and story prompt instantly.",
        image: "images/candyhearts.png",
        button: "Generate",
        href: "quiz.html"
    },
    {
        title: "DALGONA AESTHETIC LIST",
        description: "Find a bunch of references to help spark new ideas",
        image: "images/dalgona.png",
        button: "Search",
        href: "quiz.html"
    }
];

const content = document.querySelector("#content");
games.forEach(game => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML =
        `<a href="${game.href}" class="card-link">
        <img class="game-image" src="${game.image}" alt="${game.title}">
        <div>
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <button>${game.button}</button>
        </div>`;
    content.appendChild(card);
});

