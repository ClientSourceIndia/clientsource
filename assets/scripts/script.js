const primaryNav = document.querySelector(".primary__navigation");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        toggleMenu.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        toggleMenu.setAttribute("aria-expanded", "false");
    }
})

function popupModal(modalId, openButtonId) {
    const modal = document.querySelector(modalId);
    const openModal = document.querySelector(openButtonId);
    const closeModal = modal.querySelector(".close-modal");

    openModal.addEventListener("click", (event) => {
        event.preventDefault();
        modal.showModal();
    });
   
    closeModal.addEventListener("click", (event) => {
        event.preventDefault();
        modal.close();
    });
}
popupModal('#privacy-policy-modal', '#privacy-policy');
popupModal('#newsletter-modal', '#subscribe-newsletter');
popupModal('#terms-condition-modal', '#terms-conditions');