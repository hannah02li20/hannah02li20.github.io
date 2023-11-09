function toggleTheme() {
    body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}

toggleButton = document.getElementById("toggleButton");
toggleButton.onclick = toggleTheme;