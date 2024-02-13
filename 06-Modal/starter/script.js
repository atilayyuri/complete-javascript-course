'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal); 

// How to manipulate classes? 

function openModal (){
    console.log(`Open modal button clicked`);
    // Removing the hidden class from the modal hidden class 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Or alternatively, you can use the style method
    // however this is a bit challenging if you want to
    // modify multiple styles at once
    // modal.style.display = 'block';

}

function closeModal (){
    console.log(`Close Modal button clicked`);
    // Adding the hidden class from the modal hidden class 
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Open the modal if you click on the buttons
for (let i = 0; i < btnsShowModal.length; i++) {
    console.log(btnsShowModal[i].addEventListener(`click`, openModal));
    
}

// Close the modal if you click on the close button or the overlay
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// Close the modal if you press the escape key
// keydown event happens when you press a key
document.addEventListener(`keydown`, function (event) {
    console.log(event);
    if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
        closeModal();
    }
});