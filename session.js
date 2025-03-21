document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('user')) {
        window.location.href = "login.html";
    }
});
