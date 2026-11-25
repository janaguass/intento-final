export default function DarkMode() {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  if (!darkModeBtn) return;

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
  } else if (localStorage.getItem("darkMode") === "disabled") {
    darkModeBtn.textContent = "🌙";
  }

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeBtn.textContent = "🌙";
    }
  });
}