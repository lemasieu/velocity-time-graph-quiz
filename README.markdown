# Velocity-Time Graph Quiz

Welcome to the Velocity-Time Graph Quiz, a simple web-based interactive tool designed to help users practice plotting and understanding velocity-time graphs. This project allows users to select points on a graph to create their own velocity-time curve and compare it with a randomly generated correct answer.

- **Demo**: https://xn--msiu-goa8b.vn/github/velocity-time-graph-quiz
- **Date**: September 03, 2025

## Features
- Generate random velocity-time data for practice.
- Plot user-selected points on a graph to form a curve.
- Automatically evaluate the user's graph against the correct answer.
- Responsive design that works on both desktop and mobile devices.
- Option to show/hide the original data after completing the quiz.
- Reset functionality to start over.

## Technologies Used
- **HTML5**: Structure of the web page.
- **CSS3**: Styling and responsive layout.
- **JavaScript**: Interactive logic and graph rendering.
- **Chart.js**: Library for creating the interactive graph.

## Installation
1. Clone the repository:
   '''bash
   git clone https://github.com/lemasieu/velocity-time-graph-quiz.git
   '''
3. Navigate to the project directory:
   '''bash
   cd velocity-time-graph-quiz
   '''
4. Open index.html in a web browser to start using the application. No additional setup or server is required as it runs locally.

## Usage
1. Generate Data: Click "Tạo dữ liệu mới" (Generate New Data) to create a random velocity-time dataset. The table on the left will display the correct data points.
2. Select Points: The point (0,0) is pre-selected. Click on the graph at time values 1, 2, 3, 4, and 5 to add your points. The system will snap to the nearest 0.5-unit increment for distance.
3. Evaluation: After selecting all 5 points, the system will automatically evaluate your graph. A feedback message ("Chính xác!" for correct or "Sai, thử lại!" for incorrect) will appear.
4. Show Original Data: After completing the quiz, the "Hiện/Ẩn dữ liệu gốc" (Show/Hide Original Data) button will appear. Use it to toggle the display of the correct graph.
5. Reset: Click "Xóa điểm" (Reset Points) to clear your selections and start over.

## File Structure
- **index.html**: The main HTML file containing the structure.
- **styles.css**: CSS file for styling and responsive design.
- **script.js**: JavaScript file with the logic for graph interaction and evaluation.

## Contributing
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!

## License
This project is open-source and available under the MIT License (LICENSE).

## Contact
For questions or feedback, please reach out to the author:

- GitHub: https://github.com/lemasieu

