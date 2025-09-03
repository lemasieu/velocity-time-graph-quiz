let originalData = [];
let userPoints = [];
let chart;
let showOriginalData = false;
const MAX_POINTS = 6; // Tổng 6 điểm: (0,0) + 5 điểm (1, 2, 3, 4, 5)
const TIME_STEP = 0.1; // Độ chia mặc định cho snap thời gian
const DISTANCE_STEP = 0.5; // Độ chia mặc định cho snap quãng đường
const MAX_DISTANCE = 8; // Quãng đường lớn nhất

function generateRandomData() {
    originalData = [];
    const times = [0, 1, 2, 3, 4, 5]; // Thời gian cố định
    const velocity = Math.random() * (MAX_DISTANCE / 5); // Vận tốc max để quãng đường tại t=5 <=8
    times.forEach(t => {
        let distance = velocity * t;
        distance = Math.round(distance * 2) / 2; // Làm tròn đến 0.5
        originalData.push({ time: t, distance: distance });
    });
    userPoints = [{ x: 0, y: 0 }]; // Thêm điểm (0,0) ban đầu
    showOriginalData = false; // Ẩn dữ liệu gốc khi tạo mới
    updateTable();
    updateChart();
    document.getElementById('feedback').textContent = ''; // Xóa phản hồi khi tạo dữ liệu mới
    document.getElementById('toggleButton').style.display = 'none'; // Ẩn nút khi tạo mới
}

function updateTable() {
    const tbody = document.getElementById('data-body');
    tbody.innerHTML = '';
    originalData.forEach(point => {
        const row = `<tr><td>${point.time.toFixed(1)}</td><td>${point.distance.toFixed(1)}</td></tr>`;
        tbody.innerHTML += row;
    });
}

function snapToGrid(value, step) {
    return Math.round(value / step) * step;
}

function toggleOriginalData() {
    showOriginalData = !showOriginalData;
    updateChart();
}

function updateChart() {
    // Tính max cho trục tự giãn
    const maxTime = Math.max(...originalData.map(p => p.time)) * 1.1; // Padding 10%
    const maxDistance = Math.max(...originalData.map(p => p.distance)) * 1.1; // Padding 10%

    if (chart) chart.destroy();
    chart = new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Dữ liệu gốc',
                    data: showOriginalData ? originalData.map(p => ({ x: p.time, y: p.distance })) : [],
                    borderColor: '#1e90ff',
                    fill: false
                },
                {
                    label: 'Điểm người dùng',
                    data: userPoints,
                    borderColor: '#ff4500',
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    title: { display: true, text: 'Thời gian (s)', color: '#fff' },
                    ticks: { color: '#fff', stepSize: 1 }, // Bước cố định 1s
                    grid: { color: '#444' },
                    min: 0,
                    suggestedMax: maxTime // Tự giãn theo dữ liệu
                },
                y: {
                    title: { display: true, text: 'Quãng đường (m)', color: '#fff' },
                    ticks: { color: '#fff' },
                    grid: { color: '#444' },
                    min: 0,
                    suggestedMax: maxDistance // Tự giãn theo dữ liệu
                }
            },
            plugins: {
                legend: { labels: { color: '#fff' } }
            },
            onClick: (e) => {
                if (userPoints.length >= MAX_POINTS) {
                    document.getElementById('feedback').textContent = 'Đã chọn đủ điểm! Xóa để chọn lại.';
                    return;
                }
                const point = {
                    x: snapToGrid(chart.scales.x.getValueForPixel(e.x), TIME_STEP),
                    y: snapToGrid(chart.scales.y.getValueForPixel(e.y), DISTANCE_STEP)
                };
                // Chỉ chấp nhận các thời gian 1, 2, 3, 4, 5
                if ([1, 2, 3, 4, 5].includes(point.x) && point.x >= 0 && point.x <= maxTime && point.y >= 0 && point.y <= maxDistance) {
                    // Kiểm tra không trùng thời gian với điểm đã chọn
                    if (!userPoints.some(p => p.x === point.x)) {
                        userPoints.push(point);
                        userPoints.sort((a, b) => a.x - b.x); // Sắp xếp theo thời gian
                        updateChart();
                        if (userPoints.length === MAX_POINTS && userPoints.every(p => [0, 1, 2, 3, 4, 5].includes(p.x))) {
                            evaluatePoints();
                        }
                    }
                }
            }
        }
    });
}

function evaluatePoints() {
    const feedback = document.getElementById('feedback');
    let correct = true;
    userPoints.forEach((p, i) => {
        const closest = originalData.find(d => d.time === p.x);
        if (!closest || Math.abs(p.y - closest.distance) > 0.5) {
            correct = false;
        }
    });
    feedback.textContent = correct ? 'Chính xác!' : 'Sai, thử lại!';
    feedback.style.color = correct ? '#0f0' : '#f00';
    document.getElementById('toggleButton').style.display = 'inline-block'; // Hiển thị nút khi đủ điểm
}

function resetPoints() {
    userPoints = [{ x: 0, y: 0 }]; // Giữ điểm (0,0)
    updateChart();
    document.getElementById('feedback').textContent = '';
    document.getElementById('toggleButton').style.display = 'none'; // Ẩn nút khi reset
}

// Khởi tạo
generateRandomData();