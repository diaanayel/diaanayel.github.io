// theme
function toggleTheme() {
  setTheme((document.documentElement.getAttribute('data-theme') === 'light') ? "dark" : "light");
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem("theme", theme);
}

function init() {
  setTheme(localStorage.getItem("theme") ?? "light");
}

init();
