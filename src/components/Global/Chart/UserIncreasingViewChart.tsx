import { Component } from 'react';
import { createRoot } from 'react-dom/client';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

// Define the types for the state
interface ApexChartState {
    series: { name: string; data: [number, number][] }[];
    options: ApexOptions;
    seriesLine: { name: string; data: [number, number][] }[];
    optionsLine: ApexOptions;
  }

class UserIncreasingViewChart extends Component<Record<string, never>, ApexChartState> {
  constructor(props: Record<string, never>) {
    super(props);

    // Generate data for the last six months
    const generateData = () => {
      const data1: [number, number][] = [];
      const data2: [number, number][] = [];
      const currentDate = new Date();

      for (let i = 5; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        data1.push([date.getTime(), Math.floor(Math.random() * (500 - 100 + 1) + 100)]);
        data2.push([date.getTime(), Math.floor(Math.random() * (300 - 50 + 1) + 50)]);
      }
      return { data1, data2 };
    };

    const { data1, data2 } = generateData();

    this.state = {
      series: [
        {
          name: 'New Users',
          data: data1,
        },
        {
          name: 'Returning Users',
          data: data2,
        },
      ],
      options: {
        chart: {
          id: 'chart2',
          type: 'line',
          height: 230,
          dropShadow: {
            enabled: true,
            enabledOnSeries: [1],
          },
          toolbar: {
            autoSelected: 'pan',
            show: true,
          },
        },
        colors: ['#FF4560', '#00E396'],
        stroke: {
          width: [2, 4],
          curve: ['straight', 'smooth'],
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#FF4560', '#00E396'],
          },
        },
        fill: {
          opacity: [0.85, 0.75],
        },
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6,
          },
        },
        yaxis: [
          {
            seriesName: 'New Users',
            axisTicks: {
              show: true,
              color: '#FF4560',
            },
            axisBorder: {
              show: true,
              color: '#FF4560',
            },
            labels: {
              style: {
                colors: '#FF4560',
              },
            },
            title: {
              text: 'New Users',
              style: {
                color: '#FF4560',
              },
            },
          },
          {
            seriesName: 'Returning Users',
            opposite: true,
            axisTicks: {
              show: true,
              color: '#00E396',
            },
            axisBorder: {
              show: true,
              color: '#00E396',
            },
            labels: {
              style: {
                colors: '#00E396',
              },
            },
            title: {
              text: 'Returning Users',
              style: {
                color: '#00E396',
              },
            },
          },
        ],
        xaxis: {
          type: 'datetime',
          labels: {
            format: 'MMM',
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
      },
      seriesLine: [
        {
          name: 'New Users',
          data: data1,
        },
        {
          name: 'Returning Users',
          data: data2,
        },
      ],
      optionsLine: {
        chart: {
          id: 'chart1',
          height: 130,
          type: 'area',
          brush: {
            target: 'chart2',
            enabled: true,
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1).getTime(),
              max: new Date().getTime(),
            },
          },
        },
        colors: ['#FF4560', '#00E396'],
        stroke: {
          width: [1, 2],
          curve: ['straight', 'smooth'],
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            format: 'MMM',
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          tickAmount: 2,
        },
      },
    };
  }

  render() {
    return (
      <aside className='border border-indigo-600 p-4 rounded-2xl shadow-xl bg-white'>
        <div id="wrapper">
          <div id="chart-line2">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={230}
            />
          </div>
          <div id="chart-line">
            <ReactApexChart
              options={this.state.optionsLine}
              series={this.state.seriesLine}
              type="area"
              height={130}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </aside>
    );
  }
}

const domContainer = document.querySelector('#app');
if (domContainer) {
  const root = createRoot(domContainer);
  root.render(<UserIncreasingViewChart />);
}

export default UserIncreasingViewChart;
