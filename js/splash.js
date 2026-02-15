export function initSplash() {
  const splash = document.querySelector(".logo-splash-container");

  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => splash.remove(), 1000);
  }, 2000);
}
