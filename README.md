# Charts App with React and Highcharts

A modern React application built with Vite that demonstrates various chart types using Highcharts.

## Features

- **Line Chart**: Monthly sales data visualization
- **Bar Chart**: Product categories revenue comparison
- **Pie Chart**: Market share distribution
- **Gauge Chart**: Speed indicator with color zones

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Chart Types Included

### 1. Line Chart
- Shows monthly sales trends
- Interactive tooltips and zoom functionality
- Responsive design

### 2. Bar Chart
- Compares revenue across product categories
- Vertical column layout
- Customizable colors

### 3. Pie Chart
- Displays market share percentages
- Interactive legend
- Hover effects

### 4. Gauge Chart
- Speed indicator with color-coded zones
- Green (0-20), Yellow (20-90), Red (90-200)
- Real-time value display

## Customization

You can easily customize the charts by modifying the options objects in `src/App.jsx`:

- `lineChartOptions` - Line chart configuration
- `barChartOptions` - Bar chart configuration
- `pieChartOptions` - Pie chart configuration
- `gaugeOptions` - Gauge chart configuration

## Dependencies

- **React**: UI library
- **Vite**: Build tool and dev server
- **Highcharts**: Charting library
- **highcharts-react-official**: React wrapper for Highcharts

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## Next Steps

- Add more chart types (scatter, area, etc.)
- Implement data fetching from APIs
- Add chart export functionality
- Create reusable chart components
- Add theme switching (light/dark mode)

## License

MIT License - feel free to use this project as a starting point for your own chart applications!
