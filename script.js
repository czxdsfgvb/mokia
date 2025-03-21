// Mock Data Generator
const generateMockData = () => ({
    threats: Array.from({length: 6}, () => ({
        type: ['DDoS', 'Malware', 'Phishing', 'Brute Force', 'SQLi', 'XSS'][Math.floor(Math.random() * 6)],
        severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
        count: Math.floor(Math.random() * 50) + 1
    })),
    blockedAttacks: Math.floor(Math.random() * 1000),
    networkTraffic: Array.from({length: 24}, () => Math.floor(Math.random() * 100))
});

// تحديث بيانات لوحة التحكم
function updateAllData() {
    const data = generateMockData();
    document.getElementById('live-time').textContent = new Date().toLocaleString();
}

// إنشاء تنبيه جديد
function generateAlert() {
    const alerts = [
        'تم اكتشاف محاولة وصول غير مصرح بها',
        'زيادة غير عادية في حركة المرور',
        'تم منع هجوم DDoS',
        'تم تحديث قواعد جدار الحماية',
        'تم اكتشاف برمجية ضارة'
    ];
    
    const container = document.getElementById('alertsContainer');
    const alert = document.createElement('div');
    alert.className = 'alert-item';
    alert.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        ${alerts[Math.floor(Math.random() * alerts.length)]}
        <span class="time">${new Date().toLocaleTimeString()}</span>
    `;
    
    container.prepend(alert);
}

// تشغيل التحديثات التلقائية
function init() {
    updateAllData();
    setInterval(updateAllData, 5000);
    setInterval(generateAlert, 10000);
}

// بدء التنفيذ عند تحميل الصفحة
window.addEventListener('load', init);
