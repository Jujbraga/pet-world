const modal = document.getElementById("new-appointment-modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.querySelector(".close");

export function openAndCloseModal() {
  // Open the modal
  openModal.onclick = function () {
    modal.style.display = "block";
  };

  // Close the modal when the user clicks anywhere outside of it or in the close button
  window.onclick = function (event) {
    if (event.target === modal || event.target === closeModal) {
      modal.style.display = "none";
    }
  };
}
