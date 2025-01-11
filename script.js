const body = document.body;
const themeSwitcher = document.querySelector('.switch-theme');

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('light');
});

function downloadVSCode() {
    window.location.href = 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user';
}
