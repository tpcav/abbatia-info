// DOM Selectors
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// Open Modal Button Loop
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// Close Modal Button Loop
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

// Open Modal Function
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')

}

// Close Modal Function
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  
}


// Swiper JS 
var swiper = new Swiper(".mySwiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});