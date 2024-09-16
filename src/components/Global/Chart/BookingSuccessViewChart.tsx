import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions type

// Define the types for the component's state
interface BookingSuccessfulViewChartState {
  series: {
    name: string;
    type: 'line' | 'area' | 'column';
    data: number[];
  }[];
  options: ApexOptions;
}

class BookingSuccessfulViewChart extends Component<Record<string, never>, BookingSuccessfulViewChartState> {
    constructor(props: Record<string, never>) {
      super(props);

    // Generate data for the bookings
    const generateBookingData = () => {
      // Simulate bookings for the last 6 months
      const months = ['April', 'May', 'June', 'July', 'August', 'September'];
      const totalBookings: number[] = [];
      const successfulBookings: number[] = [];
      const canceledBookings: number[] = [];

      months.forEach(() => {
        const total = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // Random values between 100 and 200
        const successful = Math.floor(total * (Math.random() * (0.8 - 0.5) + 0.5)); // 50% to 80% of total
        const canceled = total - successful; // Remaining bookings are canceled

        totalBookings.push(total);
        successfulBookings.push(successful);
        canceledBookings.push(canceled);
      });

      return { totalBookings, successfulBookings, canceledBookings, months };
    };

    const { totalBookings, successfulBookings, canceledBookings, months } = generateBookingData();

    this.state = {
      series: [
        {
          name: 'Total Bookings',
          type: 'column',
          data: totalBookings,
        },
        {
          name: 'Successful Bookings',
          type: 'area',
          data: successfulBookings,
        },
        {
          name: 'Canceled Bookings',
          type: 'line',
          data: canceledBookings,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth',
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
          },
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: months, // Use the generated month labels
        markers: {
          size: 0,
        },
        xaxis: {
          categories: months,
        },
        yaxis: {
          title: {
            text: 'Number of Bookings',
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' bookings';
              }
              return y;
            },
          },
        },
        colors: ['#008FFB', '#00E396', '#FF4560'], // Set different colors for each series
      },
    };
  }

  render() {
    return (
        <aside className='border border-indigo-600 p-4 rounded-2xl shadow-xl bg-white'>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </aside>
    );
  }
}

export default BookingSuccessfulViewChart;
