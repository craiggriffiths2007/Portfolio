(() => {
    const button = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');
    if (!button) return;

    function update() {
        const dark = document.documentElement.dataset.theme === 'dark';
        label.textContent = dark ? 'Light' : 'Dark';
        button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
        button.setAttribute('aria-pressed', String(dark));
        button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }

    button.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem('portfolio-theme', next); } catch (_) {}
        update();
    });
    update();
})();
