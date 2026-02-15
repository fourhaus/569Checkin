export function initModal() {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const close = document.querySelector(".closeModal");

  document.addEventListener("click", e => {
    const img = e.target.closest("img");
    if (!img) return;

    modal.style.display = "flex";
    modalImg.src = img.src;
  });

  close.onclick = () => modal.style.display = "none";
  modal.onclick = e => {
    if (e.target === modal)
      modal.style.display = "none";
  };
}
