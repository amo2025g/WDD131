let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
      document.body.style.backgroundColor = "#393939";
      document.body.style.color = "#e8e9ed";

      const text = document.querySelector("h5");
      text.style.color = "#9bd5ff";

    logo.src = "img/byui-logo-white.png";
    logo.alt = "BYUI Logo";

    document.querySelector(".center").style.outlineColor = "#acacb8";
        // code for changes to colors and logo
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      const text = document.querySelector("h5");
      text.style.color = "#598ed4";


      logo.src = "img/byui-logo-blue.webp";
    logo.alt = "BYUI Logo";
    document.querySelector("#logo").appendChild(logo);
    }
}           
                    