const updateDashboard = () => {
    const threatGrid = document.getElementById('threatGrid');
    threatGrid.innerHTML = "🔍 تحديث بيانات الأمان...";
    
    setTimeout(() => {
        threatGrid.innerHTML = "<p>لا توجد تهديدات جديدة</p>";
    }, 2000);
    
    setTimeout(() => {
        const alertBox = document.getElementById('alertsContainer');
        const alert = document.createElement('div');
        alert.innerText = "⚠️ تم اكتشاف هجوم!";
        alertBox.appendChild(alert);
    }, 5000);
};

updateDashboard();
setInterval(updateDashboard, 10000);
