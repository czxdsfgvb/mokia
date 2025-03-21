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

// Initialize Chart.js
let networkChart;
let predictionChart;

// Update Threat Grid
function updateThreatGrid(data) {
    const grid = document.getElementById('threatGrid');
    grid.innerHTML = '';
    
    data.threats.forEach(threat => {
        const card = document.createElement('div');
        card.className = `threat-card ${threat.severity}`;
        card.innerHTML = `
            <h3>${threat.type}</h3>
            <p>التكرار: ${threat.count}</p>
            <div class="severity-indicator ${threat.severity}"></div>
        `;
        grid.appendChild(card);
    });
}

// Update Blocked Attacks Gauge
function updateBlockedGauge(percentage) {
    const gauge = document.getElementById('blockedGauge');
    gauge.style.background = `conic-gradient(
        var(--primary) ${percentage}%,
        rgba(255,255,255,0.1) ${percentage}% 100%
    )`;
}

// Update Network Traffic Chart
function updateNetworkChart(data) {
    if (networkChart) networkChart.destroy();
    
    const ctx = document.getElementById('networkTraffic').getContext('2d');
    networkChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, i) => `${i}:00`),
            datasets: [{
                label: 'حركة المرور',
                data: data,
                borderColor: var(--secondary),
                tension: 0.4
            }]
        }
    });
}

// AI Prediction (Basic Prediction Algorithm)
const attackData = [
    { hour: 1, type: "DDoS", severity: "high" },
    { hour: 5, type: "Malware", severity: "medium" },
    { hour: 10, type: "DDoS", severity: "low" },
    { hour: 14, type: "Phishing", severity: "high" },
    { hour: 20, type: "SQLi", severity: "medium" }
];

function predictNextAttack() {
    let currentHour = new Date().getHours();
    let predicted = attackData.find(a => Math.abs(a.hour - currentHour) <= 2);

    if (predicted) {
        logActivity(`⚠️ تحذير: من المتوقع حدوث هجوم ${predicted.type} خلال الساعات القادمة`);
        sendNotification(`🚨 تنبيه أمني: قد يحدث هجوم ${predicted.type} خلال الساعات القادمة`);
    }
}

function sendNotification(message) {
    let alertBox = document.createElement("div");
    alertBox.className = "alert-item";
    alertBox.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    document.getElementById("alertsContainer").prepend(alertBox);

    // Play alert sound
    let alertSound = new Audio("alert.mp3");
    alertSound.play();
}

// Generate Prediction Chart
function generatePredictionChart() {
    let ctx = document.getElementById("predictionChart").getContext("2d");

    let labels = attackData.map(a => `${a.hour}:00`);
    let severityLevels = attackData.map(a => a.severity === "high" ? 3 : a.severity === "medium" ? 2 : 1);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "خطورة التهديد المتوقع",
                data: severityLevels,
                borderColor: "#e74c3c",
                backgroundColor: "rgba(231, 76, 60, 0.2)",
                tension: 0.4
            }]
        }
    });
}

// Generate Alerts
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

// Live Updates
function updateAllData() {
    const data = generateMockData();
    updateThreatGrid(data);
    updateBlockedGauge((data.blockedAttacks % 100));
    updateNetworkChart(data.networkTraffic);
    document.getElementById('live-time').textContent = new Date().toLocaleString();
    predictNextAttack();
    generatePredictionChart();
}

// Initialize System
function init() {
    updateAllData();
    setInterval(updateAllData, 5000);
    setInterval(generateAlert, 10000);
}

// Start Application
window.addEventListener('load', init);
