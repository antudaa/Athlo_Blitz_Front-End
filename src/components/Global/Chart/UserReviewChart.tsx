import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface UserReviewRadialChartState {
  series: number[];
  options: ApexOptions;
}

class UserReviewRadialChart extends Component<Record<string, never>, UserReviewRadialChartState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      series: [30, 20, 8, 2], // Data for radial bars
      options: {
        chart: {
          height: 350, // Adjusted the height for better visualization
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '30%', // Size of the hollow center
            },
            track: {
              strokeWidth: '100%',
            },
            dataLabels: {
              name: {
                fontSize: '18px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total Reviews',
                formatter: () => {
                  // Calculate total sum of all reviews
                  return this.state.series.reduce((acc, curr) => acc + curr, 0).toString();
                },
              },
            },
          },
        },
        labels: ['Total Reviews', 'Very Good Reviews', 'Good Reviews', 'Bad Reviews'],
        colors: ['#3b82f6', '#4338ca', '#f97316', '#f87171'], // Colors for each category
      },
    };
  }

  render() {
    return (
      <div className="rounded-xl border border-indigo-500 p-6">
        {/* Descriptive text */}
        <div className="mb-4 text-center">
          <h2 className="text-lg font-bold">Reviews Overview</h2>
          <p className="text-sm text-gray-600">
            This chart represents the distribution of total reviews, categorized into very good, good, and bad reviews.
          </p>
        </div>

        {/* Chart */}
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350} // Ensure the height matches with the chart options
          />
        </div>
      </div>
    );
  }
}

export default UserReviewRadialChart;
