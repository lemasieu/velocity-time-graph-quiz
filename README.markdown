# Velocity-Time Graph Quiz

A simple, interactive web-based tool designed to help users practice plotting and understanding velocity-time graphs. The app generates random velocity-time data, lets users plot their own curve by selecting points on a graph, and automatically evaluates their answer against the correct data.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/github/velocity-time-graph-quiz](https://www.sieu.io.vn/github/velocity-time-graph-quiz)

## ✨ Features

- **Random Data Generation** – Click "Tạo dữ liệu mới" (Generate New Data) to create a random velocity-time dataset for practice
- **Interactive Point Selection** – The point (0,0) is pre-selected; click on the graph at time values 1, 2, 3, 4, and 5 to add your points
- **Snap-to-Grid Precision** – Points snap to the nearest 0.5-unit increment for distance, ensuring accurate plotting
- **Automatic Evaluation** – After selecting all 5 points, the system automatically evaluates your graph and displays a feedback message ("Chính xác!" for correct or "Sai, thử lại!" for incorrect)
- **Show/Hide Original Data** – After completing the quiz, toggle the display of the correct graph with the "Hiện/Ẩn dữ liệu gốc" button
- **Reset Functionality** – Click "Xóa điểm" (Reset Points) to clear your selections and start over
- **Responsive Design** – Works seamlessly on both desktop and mobile devices

## 🛠️ Technologies Used

- **HTML5** – Structure of the web page
- **CSS3** – Styling and responsive layout
- **JavaScript (Vanilla)** – Interactive logic and graph rendering
- **Chart.js** – Library for creating the interactive graph

## 📁 Project Structure

```
velocity-time-graph-quiz/
├── index.html            # Main HTML file containing the structure
├── styles.css            # CSS file for styling and responsive design
├── script.js             # JavaScript file with logic for graph interaction and evaluation
└── README.md             # Project documentation
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/velocity-time-graph-quiz.git
   ```
2. **Navigate to the project folder**   
   ```bash
   cd velocity-time-graph-quiz
   ```
3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local development server (e.g., Live Server in VS Code)

## 📝 How It Works

1. **Generate Data** – Click "Tạo dữ liệu mới" (Generate New Data) to create a random velocity-time dataset. The table on the left will display the correct data points.
2. **Select Points** – The point (0,0) is pre-selected. Click on the graph at time values 1, 2, 3, 4, and 5 to add your points. The system will snap to the nearest 0.5-unit increment for distance.
3. **Evaluation** – After selecting all 5 points, the system will automatically evaluate your graph. A feedback message ("Chính xác!" for correct or "Sai, thử lại!" for incorrect) will appear.
4. **Show Original Data** – After completing the quiz, the "Hiện/Ẩn dữ liệu gốc" (Show/Hide Original Data) button will appear. Use it to toggle the display of the correct graph.
5. **Reset** – Click "Xóa điểm" (Reset Points) to clear your selections and start over.

**How the data is structured:**

A sample dataset is displayed in a table with columns for time (s) and distance (m). For example:

| Time (s) | Distance (m) |
|---|---|
| 0.0 | 0.0 |
| 1.0 | 0.5 |
| 2.0 | 0.5 |
| 3.0 | 1.0 |
| 4.0 | 1.5 |
| 5.0 | 1.5 |

Users must select points on the graph to match this data as closely as possible.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
