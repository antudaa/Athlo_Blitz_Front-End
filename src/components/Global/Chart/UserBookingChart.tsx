import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// Helper function to get the last 4 months and their labels
const getLast4Months = () => {
  const now = new Date();
  const labels = [];

  for (let i = 3; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.toLocaleString('default', { month: 'short' });
    labels.push(month);
  }

  return { labels };
};

// Data for demonstration purposes related to bookings
const generateBookingData = () => {
  const data = {
    'Facility Bookings': [18, 12, 21, 25],
    'Successfull Experience': [18, 10, 20, 22],
    'Cancel Bookings': [0, 2, 0, 3]
  };
  return data;
};

interface MyBookingsChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
}

class MyBookingsChart extends Component<Record<string, never>, MyBookingsChartState> {
    constructor(props: Record<string, never>) {
      super(props);

    const { labels } = getLast4Months();
    const data = generateBookingData();

    this.state = {
      series: [
        {
          name: 'Facility Bookings',
          data: data['Facility Bookings']
        },
        {
          name: 'Successfull Experience',
          data: data['Successfull Experience']
        },
        {
          name: 'Cancel Bookings',
          data: data['Cancel Bookings']
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 35,
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: '55%',
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#f0f9ff']
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: labels,
          title: {
            text: 'Month'
          },
          labels: {
            style: {
              colors: '#2563eb'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Bookings',
            style: {
              color: '#2563eb'
            }
          },
          labels: {
            formatter: (value: number) => `${value}`
          }
        },
        fill: {
          opacity: 1,
          colors: ['#3b82f6', '#6366f1', '#d97706'] // Indigo and blue shades
        },
        tooltip: {
          y: {
            formatter: function (val: number) {
              return val + " bookings";
            }
          }
        },
        colors: ['#3b82f6', '#6366f1', '#d97706'] // Indigo and blue shades
      }
    };
  }

  render() {
    return (
      <div className='rounded-xl border border-indigo-500 p-4'>
        <h2>Bookings Overview</h2>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
      </div>
    );
  }
}

export default MyBookingsChart;
