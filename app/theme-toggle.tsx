'use client';

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      <span className="theme-to-light"><span aria-hidden="true">☀</span> Light mode</span>
      <span className="theme-to-dark"><span aria-hidden="true">☾</span> Dark mode</span>
    </button>
  );
}
