import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// Function to generate data for the bubble chart
const generateData = (baseval: number, count: number, yrange: { min: number; max: number }) => {
    let i = 0;
    const series: { x: number; y: number; z: number }[] = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
      series.push({ x, y, z });
      baseval += 86400000; // Adding one day in milliseconds
      i++;
    }
    return series;
  };
  
  interface ApexBubbleChartState {
    series: {
      name: string;
      data: { x: number; y: number; z: number }[];
    }[];
    options: ApexOptions;
  }

class FacilityOverviewChart extends Component<Record<string, never>, ApexBubbleChartState> {
    constructor(props: Record<string, never>) {
      super(props);

      this.state = {
        series: [
          {
            name: 'Gym',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Swimming Pool',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Tennis Court',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Golf Club',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'bubble',
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            opacity: 0.8
          },
          title: {
            text: 'Facility Booking Bubble Chart'
          },
          xaxis: {
            tickAmount: 12,
            type: 'category',
            title: {
              text: 'Number of Bookings'
            },
          },
          yaxis: {
            max: 70,
            title: {
              text: 'Average Rating'
            },
          },
          tooltip: {
            shared: true,
            intersect: false,
            x: {
              formatter: (val) => `Bookings: ${val}`
            },
            y: {
              formatter: (val) => `Rating: ${val}`
            },
            z: {
              formatter: (val) => `Price: $${val}`
            }
          }
        },
      };
    }
  
    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

export default FacilityOverviewChart;
