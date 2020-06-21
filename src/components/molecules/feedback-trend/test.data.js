export const chartData = [
  {
    date: '2019-06-17',
    count: 10
  },
  {
    date: '2019-06-18',
    count: 8
  },
  {
    date: '2019-06-19',
    count: 5
  },
  {
    date: '2019-06-20',
    count: 3
  },
  {
    date: '2019-06-21',
    count: 3
  }
];

export const defaultChartOptions = {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Feedback trend by date',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  colors: ['#c60c30'],
  xaxis: {
    categories: [],
    title: {
      text: 'Date',
    },
  },
  yaxis: {
    min: 0,
    tickAmount: 5,
    title: {
      text: 'count',
    },
    labels: {
      formatter: (value) => { return Math.round(value) },
    }
  }
};

export const chartSeries = [{
  name: "Feedbacks received",
  data: [],
}];