//=require jquery
//=require formchimp
//=require svg-injector
//=require highcharts/highcharts.js

(function($) {
  if ($(".newsletter").length) {
    $(".newsletter").formchimp({
      'errorMessage': 'Aj… Något gick fel i kontakten med databasen. Försök prenumerera igen.',
      'responseClass': 'newsletter__response',
      'successMessage': 'Kul att du är intresserad! Du får strax ett mail för att bekräfta din prenumeration.',
      'onMailChimpSuccess': function() {

      },
      'onMailChimpError': function() {

      }
    });
  }

  var mySVGsToInject = document.querySelectorAll('img.svg');
  SVGInjector(mySVGsToInject);
  
  
  //Charts
  if ($('.chart').length) {
    Highcharts.theme = {
      colors: ['#0403E8', '#85FFC7', '#FFFD98', '#1C0B19', '#F4FCFF', '#000000'],
      chart: {
  //      backgroundColor: 'rgba(255,253, 152, .5)',
        backgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        shadow: false,
        style: {
          fontFamily: '"Source Code Pro", sans-serif'
        }
      },
      title: {
        style: {
          color: '#0403E8',
          fontWeight: '600',
          fontSize: '24px',
          fontFamily: '"Source Code Pro", sans-serif'
        }
      },
      subtitle: {
        style: {
          color: '#1C0B19',
          fontWeight: '400',
          fontSize: '12px',
          fontFamily: '"Source Code Pro", sans-serif'
        }
      },

      legend: {
        itemStyle: {
          color: '#1C0B19',
          fontWeight: '400',
          fontSize: '10px',
          fontFamily: '"Source Code Pro", sans-serif'
        },
        itemHoverStyle:{
          color: 'gray'
        }   
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
          enabled: false
        },
        minorTickLength: 0,
        tickLength: 0,

  //      labels: {
  //         style: {
  //            color: 'transparent'
  //         }
  //      }
      },
      yAxis: {
        gridLineWidth: 0,
        gridLineColor: 'transparent',
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        lineWidth:1,
  //      labels: {
  //         style: {
  //            color: '#343C54'
  //         }
  //      }
      },
      plotOptions: {
        series: {
           shadow: false
        },
        map: {
           shadow: false
        },
        bar: {
        },
      },
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);


    //Line Basic
    Highcharts.chart('line-basic', {
      title: {
          text: 'Line Basic'
      },
      subtitle: {
          text: 'Source: thesolarfoundation.com'
      },
      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
      plotOptions: {
          series: {
              pointStart: 2010
          }
      },
      series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }]
    });

    //Bar Stacked
    Highcharts.chart('bar-stacked', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Bar Stacked'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total fruit consumption'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
    });

    //Bar Basic
    Highcharts.chart('bar-basic', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Bar Basic'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Year 2012',
            data: [1052, 954, 4250, 740, 38]
        }]
    });

    //Pie Basic
    Highcharts.chart('pie-basic', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Pie Basic'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Microsoft Internet Explorer',
              y: 56.33
          }, {
              name: 'Chrome',
              y: 24.03,
              sliced: true,
              selected: true
          }, {
              name: 'Firefox',
              y: 10.38
          }, {
              name: 'Safari',
              y: 4.77
          }, {
              name: 'Opera',
              y: 0.91
          }, {
              name: 'Proprietary or Undetectable',
              y: 0.2
          }]
      }]
    });

    //Pie Legend
    Highcharts.chart('pie-legend', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Pie Legend'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    }); 
  }
})(jQuery);