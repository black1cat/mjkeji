var myChart = echarts.init(document.getElementById('temperature'));

  // 指定图表的配置项和数据
  var option1 = {
    title: {
      text: '温度'
    },
    tooltip: {},
    legend: {
      data:['温度']
    },
    xAxis: {
      data: ["0时","3时","6时","9时","12时","15时","18时","21时","24时"]
    },
    yAxis: {},
    series: [{
      name: '温度',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20,24,3,56]
    }]
  };

  myChart.setOption(option1);