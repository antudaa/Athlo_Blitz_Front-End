import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions type

// Define the types for the state
interface BookingIncreaseViewChartState {
  series: { name: string; data: number[] }[];
  options: ApexOptions;
}

class BookingIncreaseViewChart extends Component<Record<string, never>, BookingIncreaseViewChartState> {
    constructor(props: Record<string, never>) {
      super(props);

    // Generate data for booking growth
    const generateBookingData = () => {
      const bookingSeries1: number[] = [];
      const bookingSeries2: number[] = [];

      // Simulate data points for the last 7 days
      for (let i = 6; i >= 0; i--) {
        const randomBookings1 = Math.floor(Math.random() * (150 - 50 + 1)) + 50; // Random values between 50 and 150
        const randomBookings2 = Math.floor(Math.random() * (100 - 30 + 1)) + 30; // Random values between 30 and 100

        bookingSeries1.push(randomBookings1);
        bookingSeries2.push(randomBookings2);
      }

      return { bookingSeries1, bookingSeries2 };
    };

    const { bookingSeries1, bookingSeries2 } = generateBookingData();

    this.state = {
      series: [
        {
          name: 'New Bookings',
          data: bookingSeries1,
        },
        {
          name: 'Returning Bookings',
          data: bookingSeries2,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            "2024-09-08T00:00:00.000Z",
            "2024-09-09T00:00:00.000Z",
            "2024-09-10T00:00:00.000Z",
            "2024-09-11T00:00:00.000Z",
            "2024-09-12T00:00:00.000Z",
            "2024-09-13T00:00:00.000Z",
            "2024-09-14T00:00:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 90, 100],
          },
        },
        colors: ['#FF4560', '#008FFB'],
      },
    };
  }

  render() {
    return (
        <aside className='border border-indigo-600 p-7 rounded-2xl shadow-xl bg-white'>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </aside>
    );
  }
}

export default BookingIncreaseViewChart;
