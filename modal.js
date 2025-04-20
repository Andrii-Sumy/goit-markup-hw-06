let modal = document.getElementById("modalWindow");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// setTimeout(openModal, 60000)

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = "none";
    }
});
  
// let mobMenu = document.getElementById("menu");

// function openMobMenu() {
//     mobMenu.style.display = "block";
// }

// function closeMobMenu() {
//     mobMenu.style.display = "none";
// }
// window.onclick = function (event) {
//     if (event.target == mobMenu) {
//         closeMobMenu();
//     }
// }