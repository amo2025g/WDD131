const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});



/* two dom elements the user will be interacting with */
// const menu = document.querySelector('header ul nav');
// const menuToggle = document.querySelector('.menu');

const button = document.querySelector('.menu');
const nav = document.querySelector('nav');
button.addEventListener('click', menuToggle);

console.log(button);

function menuToggle () {
    console.log('inside function');
    nav.classList.toggle('hide');
}
