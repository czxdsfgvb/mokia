document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = "index.html";
            } else {
                alert('خطأ في تسجيل الدخول');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            let users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(user => user.username === newUsername)) {
                alert('اسم المستخدم موجود بالفعل');
                return;
            }

            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            alert('تم التسجيل بنجاح!');
            window.location.href = "login.html";
        });
    }
});
