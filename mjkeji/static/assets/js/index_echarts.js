var charts = [];
  var myChart1 = echarts.init(document.getElementById('temperature'));
  var myChart2 = echarts.init(document.getElementById('noise'));
  var myChart3 = echarts.init(document.getElementById('temperature_h'));
  var myChart4 = echarts.init(document.getElementById('humidity'));
  var myChart5 = echarts.init(document.getElementById('strap'));
  var myChart6 = echarts.init(document.getElementById('chain'));
  var myChart7 = echarts.init(document.getElementById('current'));
    var app ={
      xdata:[],
      yvalue:[]
    };
    var app_t ={
      xdata_t:[],
      yvalue_t:[]
    };
    var app_h ={
      xdata_t:[],
      yvalue_h:[]
    };
    $(document).ready(function(){
      getData_tem();
      getData_no();
      getData_1();
      getData_2();
      getData_str();
      getData_cha();
      getData_mo();
      console.log(app.xdata)
      console.log(app.yvalue)
    });
    function getData_tem() {
      $.ajax({
        url:'echarts_tem',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app.xdata = data.xtime;
          app.yvalue = data.yv;
          myChart1.setOption({
            title: {
              text: '温度'
            },
            tooltip: {
               trigger: 'axis'
            },
            legend: {
              data:['温度','温度最低警示线','温度最高警示线']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: app.xdata,
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}V'
              },
              min:0,
              max:40,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '温度',
              type: 'line',
              data: app.yvalue,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低温预警"  //和y轴对应的数值
                },
                yAxis:5         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高温预警"  //和y轴对应的数值
                },
                yAxis:35         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
              itemStyle : {  
                            
            },
              areaStyle: {}
           }
          ]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    }
    function getData_no() {
      $.ajax({
        url:'echarts_t',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app.xdata = data.xtime;
          app.yvalue = data.yv;
          myChart2.setOption({
            title: {
              text: '频率'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['频率']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: app.xdata
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}HZ'
              },
              min:0,
              max:3000,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '频率',
              type: 'line',
              data: app.yvalue,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低温预警"  //和y轴对应的数值
                },
                yAxis:1000         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高温预警"  //和y轴对应的数值
                },
                yAxis:2700         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
              itemStyle : {  
                            
            },
              areaStyle: {}
            }]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    }
    function getData_1() {
      $.ajax({
        url:'echarts_temp',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app_t.xdata_t = data.xtime;
          app_t.yvalue_t = data.yv;
          myChart3.setOption({
            title: {
              text: '温度'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['温度']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: app_t.xdata_t
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}℃'
              },
              min:0,
              max:40,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '温度',
              type: 'line',
              data: app_t.yvalue_t,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低温预警"  //和y轴对应的数值
                },
                yAxis:5         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高温预警"  //和y轴对应的数值
                },
                yAxis:35         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
            areaStyle: {}
            }]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    }
    function getData_2() {
      $.ajax({
        url:'echarts_h',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app_h.xdata_t = data.xtime;
          app_h.yvalue_h = data.yv;
          myChart4.setOption({
            title: {
              text: '湿度'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['湿度']
            },
            xAxis: {
              data: app_h.xdata_t,
              type: 'category',
              boundaryGap: false,
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}%'
              },
              min:0,
              max:20,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '湿度',
              type: 'line',
              data: app_h.yvalue_h,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低湿预警"  //和y轴对应的数值
                },
                yAxis:5         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高湿预警"  //和y轴对应的数值
                },
                yAxis:18         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
            areaStyle: {}
            }]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    }
    function getData_str() {
      $.ajax({
        url:'echarts_ten',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app.xdata = data.xtime;
          app.yvalue = data.yv;
          myChart5.setOption({
            title: {
              text: '频率'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['频率']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: app.xdata
              
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}HZ'
              },
              min:0,
              max:60,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '频率',
              type: 'line',
              data: app.yvalue,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低温预警"  //和y轴对应的数值
                },
                yAxis:20         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高温预警"  //和y轴对应的数值
                },
                yAxis:47         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
              itemStyle : {  
                            
            },
              areaStyle: {}
            }]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    } 
    function getData_cha() {
      $.ajax({
        url:'echarts_c',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app.xdata = data.xtime;
          app.yvalue = data.yv;
          myChart6.setOption({
            title: {
              text: '频率'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['频率']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: app.xdata
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}HZ'
              },
              min:0,
              max:60,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '频率',
              type: 'line',
              data: app.yvalue,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低温预警"  //和y轴对应的数值
                },
                yAxis:5         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高温预警"  //和y轴对应的数值
                },
                yAxis:35         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
              itemStyle : {  
                            
            },
              areaStyle: {}
            }]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    }
    function getData_mo() {
      $.ajax({
        url:'echarts_m',
        data:{},
        type:'POST',
        async:false,
        data:'json',
        success:function(data){
          app.xdata = data.xtime;
          app.yvalue = data.yv;
          myChart7.setOption({
            title: {
              text: '电流'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['电流']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: app.xdata
            },
            yAxis: {
              type:'value',
              axisLabel:{
                formatter:'{value}V'
              },
              min:0,
              max:25,
              splitLine:{
                line:3,
                lineStyle:{

                  color:['#aaa', '#ddd']
                }
              },
            },
            series: [{
              name: '电流',
              type: 'line',
              data: app.yvalue,
              smooth:true,
              markLine: {
                // animation = true,
                data : [{
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"低温预警"  //和y轴对应的数值
                },
                yAxis:8         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            {
                
                silent:true,             //鼠标悬停事件  true没有，false有
                    label:{
                    position:'end', //end对应的值显示在警戒线的后面，start显示在前面（y轴上）
                    formatter:"高温预警"  //和y轴对应的数值
                },
                yAxis:18         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
               
            },
            ]
            },
              itemStyle : {  
                            
            },
              areaStyle: {}
            }]
          })
        },
        error:function (msg) {
                alert(msg)
                console.log(msg);
                alert('系统发生错误');
            }
      })
    }

    charts.push(myChart1);
    charts.push(myChart2);
    charts.push(myChart3);
    charts.push(myChart4);
    charts.push(myChart5);
    charts.push(myChart6);
    charts.push(myChart7)
    $(window).resize(function() {
 for(var i = 0; i < charts.length; i++) {
 charts[i].resize();
 }
 });
 //解决tab切换不显示问题 在加载窗口后重新渲染。
 $('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
 for(var i = 0; i < charts.length; i++) {
 charts[i].resize();
 }
 });