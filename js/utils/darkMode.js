export default function DarkMode() {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  })  
}