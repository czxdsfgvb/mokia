function generateAlert() {
    const alerts = [
        'تم اكتشاف محاولة وصول غير مصرح بها',
        'زيادة غير عادية في حركة المرور',
        'تم منع هجوم DDoS'
    ];
    
    const container = document.getElementById('alertsContainer');
    const alert = document.createElement('div');
    alert.className = 'alert-item';
    alert.innerHTML = `⚠️ ${alerts[Math.floor(Math.random() * alerts.length)]} <span>${new Date().toLocaleTimeString()}</span>`;
    container.prepend(alert);
}

function generatePreventionAlert() {
    const container = document.getElementById('preventedContainer');
    const alert = document.createElement('div');
    alert.className = 'prevented-item';
    alert.innerHTML = `✅ تم منع الهجوم بنجاح <span>${new Date().toLocaleTimeString()}</span>`;
    container.prepend(alert);
}

setInterval(generateAlert, 10000);
setInterval(generatePreventionAlert, 15000);
