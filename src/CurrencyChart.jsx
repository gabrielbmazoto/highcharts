import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CurrencyChart = () => {
  const [currencyData, setCurrencyData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch currency data from a free API
  const fetchCurrencyData = async () => {
    try {
      setLoading(true)
      // Using exchangerate-api.com (free, no API key required)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
      const data = await response.json()

      // Get current time
      const now = new Date()
      const timeString = now.toLocaleTimeString()

      // Create new data point
      const newDataPoint = {
        time: timeString,
        eur: data.rates.EUR,
        gbp: data.rates.GBP,
        cad: data.rates.CAD,
        aud: data.rates.AUD
      }

      setCurrencyData(prev => {
        const updated = [...prev, newDataPoint]
        // Keep only last 20 data points for better visualization
        return updated.slice(-20)
      })

      setError(null)
    } catch (err) {
      setError('Failed to fetch currency data')
      console.error('Currency fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Initial fetch and set up interval
  useEffect(() => {
    fetchCurrencyData()
    // Update every 30 seconds
    const interval = setInterval(fetchCurrencyData, 30000)
    return () => clearInterval(interval)
  }, [])

  // Chart configuration - Column chart
  const chartOptions = {
    chart: {
      type: 'column',
      height: 400,
      backgroundColor: '#f8f9fa'
    },
    title: {
      text: 'Current Currency Exchange Rates (USD Base)',
      style: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    subtitle: {
      text: 'Updates every 30 seconds • Last update: ' + (currencyData.length > 0 ? currencyData[currencyData.length - 1]?.time : 'Loading...')
    },
    xAxis: {
      categories: ['EUR', 'GBP', 'CAD', 'AUD'],
      title: {
        text: 'Currency'
      }
    },
    yAxis: {
      title: {
        text: 'Exchange Rate'
      },
      min: 0
    },
    tooltip: {
      pointFormat: '<b>{point.y:.4f}</b>',
      valueDecimals: 4
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{y:.4f}',
          style: {
            fontSize: '10px'
          }
        }
      }
    },
    series: [{
      name: 'Exchange Rate',
      data: currencyData.length > 0 ? [
        currencyData[currencyData.length - 1].eur,
        currencyData[currencyData.length - 1].gbp,
        currencyData[currencyData.length - 1].cad,
        currencyData[currencyData.length - 1].aud
      ] : [],
      colorByPoint: true,
      colors: ['#2E86AB', '#A23B72', '#C73E1D', '#2D5016']
    }],
    credits: {
      enabled: false
    }
  }

  if (loading && currencyData.length === 0) {
    return (
      <div className="chart-section">
        <h2>Real-time Currency Chart</h2>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <div>Loading currency data...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="chart-section">
        <h2>Real-time Currency Chart</h2>
        <div style={{ textAlign: 'center', padding: '50px', color: '#d32f2f' }}>
          <div>Error: {error}</div>
          <button
            onClick={fetchCurrencyData}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="chart-section">
      <h2>Real-time Currency Chart</h2>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={fetchCurrencyData}
          disabled={loading}
          style={{
            padding: '8px 16px',
            backgroundColor: loading ? '#ccc' : '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Updating...' : 'Refresh Now'}
        </button>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  )
}

export default CurrencyChart
