
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let darkmode = localStorage.getItem('darkmode')

selectElem.addEventListener('change', changeTheme);

if (current == 'dark') {
      darkmode !== "active" ? enableDarkmode() : disableDarkmode()

function changeTheme() {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    } else {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkmode', null)
    }       
                    

    // I don't get it sorry
    //I used this youtube video https://www.youtube.com/watch?v=_gKEUYarehE
    // but it's clearly very different