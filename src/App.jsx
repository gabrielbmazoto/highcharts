import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import CurrencyChart from './CurrencyChart'
import './App.css'

// Import Highcharts modules
import HighchartsMore from 'highcharts/highcharts-more'
import SolidGauge from 'highcharts/modules/solid-gauge'

// Initialize the required modules
HighchartsMore(Highcharts)
SolidGauge(Highcharts)

function App() {
  // Sample data for different chart types
  const lineChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Sales Data'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      title: {
        text: 'Sales ($)'
      }
    },
    series: [{
      name: 'Sales',
      data: [1000, 1200, 1100, 1500, 1800, 2000]
    }]
  }

  const barChartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Product Categories'
    },
    xAxis: {
      categories: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports']
    },
    yAxis: {
      title: {
        text: 'Revenue ($)'
      }
    },
    series: [{
      name: 'Revenue',
      data: [5000, 3000, 2000, 4000, 2500]
    }]
  }

  const pieChartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Market Share'
    },
    series: [{
      name: 'Market Share',
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Other', y: 7.05 }
      ]
    }]
  }

  const gaugeOptions = {
    chart: {
      type: 'solidgauge'
    },
    title: {
      text: 'Speed'
    },
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    yAxis: {
      min: 0,
      max: 200,
      stops: [
        [0.1, '#55BF3B'],
        [0.5, '#DDDF0D'],
        [0.9, '#DF5353']
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    },
    series: [{
      name: 'Speed',
      data: [80],
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:25px">{y}</span><br/><span style="font-size:12px">km/h</span></div>'
      },
      tooltip: {
        valueSuffix: ' km/h'
      }
    }]
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Charts with Highcharts</h1>
        <p>Interactive charts built with React and Highcharts</p>
      </header>

      <div className="charts-container">
        <div className="chart-section currency-chart">
          <CurrencyChart />
        </div>

        <div className="chart-section">
          <h2>Line Chart</h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={lineChartOptions}
          />
        </div>

        <div className="chart-section">
          <h2>Bar Chart</h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={barChartOptions}
          />
        </div>

        <div className="chart-section">
          <h2>Pie Chart</h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={pieChartOptions}
          />
        </div>


      </div>
    </div>
  )
}

export default App
