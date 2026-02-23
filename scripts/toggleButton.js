const themeButton = document.getElementById('lightDarkButton');

function loadTheme()
{
  // 1. Get the setting from localStorage
  const darkModeSave = localStorage.getItem('darkMode');

  // 2. If the user previously enabled it, add the class immediately
  if (darkModeSave === 'enabled') {
      document.body.classList.add('dark');
      themeButton.textContent = "🌙";
    }
    else
      {
    themeButton.textContent = "☀️";
  }
}

function toggle() {
  // Toggle logic
    // Check if we just turned on dark mode
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains('dark');
    
    themeButton.textContent = isDark ? "🌙" : "☀️";

    // Save the result: 'enabled' or 'disabled'
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

}
loadTheme();


themeButton.addEventListener('click', toggle);