import config from '@/config';

export default {
  bigStat: [
    {
      product: 'Light Blue',
      total: '4,232',
      color: 'primary',
      registrations: {
        value: 830,
        profit: true,
      },
      bounce: {
        value: 4.5,
        profit: false,
      },
    },
    {
      product: 'Sing App',
      total: '754',
      color: 'danger',
      registrations: {
        value: 30,
        profit: true,
      },
      bounce: {
        value: 2.5,
        profit: true,
      },
    },
    {
      product: 'RNS',
      total: '1,025',
      color: 'info',
      registrations: {
        value: 230,
        profit: true,
      },
      bounce: {
        value: 21.5,
        profit: false,
      },
    },
  ],
  trend: {
    gradient: [config.light.success]
  },
  table: [
    {
      id: 0,
      name: 'Apple',
      ticker: 'AAPL',
      industry: 'tech',
      market: '12B',
      sharenum: '12',
      shareprice: '$100',
      value: '$12',
      last15da: '+12%',
      lastmonth: '+15%',
      details: 'Sent',
    },{
      id: 1,
      name: 'Google',
      ticker: 'GOO',
      industry: 'tech',
      market: '12B',
      sharenum: '12',
      shareprice: '$100',
      value: '$12',
      last15da: '+12%',
      lastmonth: '+15%',
      details: 'Sent',
    },{
      id: 2,
      name: 'EcoGreen',
      ticker: 'EGR',
      industry: 'energy',
      market: '5B',
      sharenum: '8',
      shareprice: '$50',
      value: '$55',
      last15da: '+10%',
      lastmonth: '+15%',
      details: 'Sent',
    },{
      id: 3,
      name: 'TranspoLog',
      ticker: 'TLOG',
      industry: 'transportation',
      market: '10B',
      sharenum: '9',
      shareprice: '$60',
      value: '$66',
      last15da: '+10%',
      lastmonth: '+12%',
      details: 'Sent',
    },
  ],
  menu: [
    'Edit',
    'Copy',
    'Delete',
    'Print'
  ],
  lastReports: [
    {title: 'Print PDF', icon: 'mdi-printer'},
    {title: 'Download', icon: 'mdi-download'},
    {title: 'Sand by mail', icon: 'mdi-email'},
    {title: 'Share', icon: 'mdi-share-variant'}
  ],
  select: ['Daily', 'Weekly', 'Monthly'],
  apexPie: {
    options: {
      dataLabels: {
        enabled: false
      },
      colors: [config.light.primary, config.light.secondary, config.light.success],
      labels: ["Cash", "Equity invested", "Other assets"],
      legend: {

      }
    },
    series: [400, 300, 300],
  },
  apexArea1: {
    options: {
      chart: {
        id: 'apexAreaFirst',
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.secondary],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [50, 56, 52, 51, 52, 55, 53]
      }
    ],
  },
  apexArea2: {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.primary],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [55, 56, 52, 51, 52, 55, 53]
      }
    ],
  },
  apexArea3: {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.warning],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [55, 56, 52, 51, 52, 55, 53]
      }
    ],
  },
  mainApexArea: {
    options: {
      chart: {
        width: '100%',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      markers: {
        size: [5, 0, 0]
      },
      stroke: {
        width: [3, 3, 0],
        curve: ['straight', 'smooth', "smooth"]
      },
      fill: {
        type: 'linear',
      },
      legend: {
        show: false

      },
      colors: [config.light.warning, config.light.primary, '#f3f5ff'],
      yaxis: {
        axisBorder: {
          show: true,
          color: '#B9B9B980'
        },
        labels: {
          style: {
            colors: ['#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
            fontSize: '12px',
          },
        },
        tickAmount: 5
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '12px',
            colors: ['#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
          }
        },
        tickAmount: 10,
      }
    },
    series: [
      {
        name: 'Tablet',
        type: 'line',
        data: [3100, 4000, 2800, 5100, 4200, 6090, 5100, 3100, 4000, 2800, 5100, 4200, 6090, 5100]
      },
      {
        name: 'Mobile',
        type: 'line',
        data: [1100, 3200, 4500, 3020, 3400, 5200, 4100, 1100, 3200, 4500, 3020, 3400, 5200, 4100]
      },
      {
        name: 'Desktop',
        type: 'area',
        data: [2100, 2000, 1800, 4100, 1200, 3600, 6100, 2100, 2000, 1800, 4100, 1200, 3600, 6100]
      }
    ],
    series2: [
      {
        name: 'Tablet',
        type: 'line',
        data: [2100, 3000, 2800, 6100, 5200, 5090, 4100, 2100, 2000, 3800, 6100, 5200, 7090, 6100]
      },
      {
        name: 'Mobile',
        type: 'line',
        data: [1100, 3200, 4500, 3020, 3400, 5200, 4100, 1100, 3200, 4500, 3020, 3400, 5200, 4100]
      },
      {
        name: 'Desktop',
        type: 'area',
        data: [2100, 2000, 1800, 4100, 1200, 3600, 6100, 2100, 2000, 1800, 4100, 1200, 3600, 6100]
      }
    ],
    series3: [
      {
        name: 'Tablet',
        type: 'line',
        data: [4100, 5000, 4800, 8100, 7200, 7090, 6100, 4100, 4000, 5800, 8100, 7200, 9090, 8100]
      },
      {
        name: 'Mobile',
        type: 'line',
        data: [4100, 5200, 7500, 6020, 6400, 8200, 7100, 4100, 6200, 7500, 6020, 6400, 8200, 7100]
      },
      {
        name: 'Desktop',
        type: 'area',
        data: [5100, 5000, 4800, 7100, 4200, 6600, 9100, 5100, 5000, 4800, 7100, 4200, 4600, 9100]
      }
    ],
  },
  apexBar1: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.primary],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [70, 63, 84, 79, 70, 65, 80]
    }],
  },
  apexBar2: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.warning],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0
        },
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [30, 23, 54, 69, 40, 25, 60]
    }],
  },
  apexBar3: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.secondary],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0
        },
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [60, 43, 24, 19, 30, 45, 60]
    }],
  }
};
