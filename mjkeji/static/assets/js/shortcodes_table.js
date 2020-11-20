var defaultDate = document.querySelectorAll('.date-picker');
for (var i = 0; i<defaultDate.length; i++) {
    defaultDate[i].valueAsDate = new Date();
}
function select(){
  data_q = $(" input[ name='datetime_1' ] ").val()
  data_z = $(" input[ name='datetime_2' ] ").val()
  sel1 = $('#sel1').val()
  sel2 = $('#sel2').val()
  if(sel2 == '温度'){
    $(function () {
    $("#table").bootstrapTable("destroy");
    $('#table').bootstrapTable({
        url: 'shortcodes_table_ptem',  // 请求数据源的路由
        method:'GET' ,
        dataType: "json",
        // sortable: true, //是否启用排序
        // sortOrder: "asc", //排序方式
        queryParams:{ 
          time_q:data_q,
          time_z:data_z,
          sel1:sel1
        },
        sortable: true, //是否启用排序
      sortOrder: "asc", //排序方式
      pagination: true, //前端处理分页
      singleSelect: false,//是否只能单选
      search: true, //显示搜索框，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
      toolbar: '#toolbar', //工具按钮用哪个容器
      striped: true, //是否显示行间隔色
      cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pageNumber: 1, //初始化加载第10页，默认第一页
      pageSize: 10, //每页的记录行数（*）
      pageList: [10, 20, 50, 100], //可供选择的每页的行数（*）
      strictSearch: true,//设置为 true启用 全匹配搜索，false为模糊搜索
      showColumns: true, //显示内容列下拉框
      showRefresh: true, //显示刷新按钮
      minimumCountColumns: 2, //当列数小于此值时，将隐藏内容列下拉框
      clickToSelect: true, //设置true， 将在点击某行时，自动勾选rediobox 和 checkbox
      uniqueId: "id", //每一行的唯一标识，一般为主键列
      showToggle: true, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
      showToggle: false, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      detailView: false, //是否显示父子表
      clickToSelect: true,
        columns: [{  //定义表头,这个表头必须定义,下边field后边跟的字段名字必须与后端传递的字段名字相同.如:id、name、price 跟后端的字段名id  name price是完全一样的.

            field: 'id',
            title: '数据序号',
            align: 'center',
            valign: 'middle',  //对齐方式，居中
            width: '200px'  // 可以写各种样式#}

        }, {
            field: 'temperature',
            title: '温度数值',
            valign: 'middle',
            align: 'center'
        }, 
        {
            field: 'time',
            title: '数据时间',
            valign: 'middle',
            align: 'center'
        },
        ],
    });
});
}
if(sel2 == '湿度'){
    $(function () {
    $("#table").bootstrapTable("destroy");
    $('#table').bootstrapTable({
        url: 'shortcodes_table_hum',  // 请求数据源的路由
        method:'GET' ,
        dataType: "json",
        // sortable: true, //是否启用排序
        // sortOrder: "asc", //排序方式
        queryParams:{ 
          time_q:data_q,
          time_z:data_z,
          sel1:sel1
        },
        sortable: true, //是否启用排序
      sortOrder: "asc", //排序方式
      pagination: true, //前端处理分页
      singleSelect: false,//是否只能单选
      search: true, //显示搜索框，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
      toolbar: '#toolbar', //工具按钮用哪个容器
      striped: true, //是否显示行间隔色
      cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pageNumber: 1, //初始化加载第10页，默认第一页
      pageSize: 10, //每页的记录行数（*）
      pageList: [10, 20, 50, 100], //可供选择的每页的行数（*）
      strictSearch: true,//设置为 true启用 全匹配搜索，false为模糊搜索
      showColumns: true, //显示内容列下拉框
      showRefresh: true, //显示刷新按钮
      minimumCountColumns: 2, //当列数小于此值时，将隐藏内容列下拉框
      clickToSelect: true, //设置true， 将在点击某行时，自动勾选rediobox 和 checkbox
      uniqueId: "id", //每一行的唯一标识，一般为主键列
      showToggle: true, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
      showToggle: false, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      detailView: false, //是否显示父子表
      clickToSelect: true,
        columns: [{  //定义表头,这个表头必须定义,下边field后边跟的字段名字必须与后端传递的字段名字相同.如:id、name、price 跟后端的字段名id  name price是完全一样的.

            field: 'id',
            title: '数据序号',
            align: 'center',
            valign: 'middle',  //对齐方式，居中
            width: '200px'  // 可以写各种样式#}

        }, {
            field: 'humidity',
            title: '湿度数值',
            valign: 'middle',
            align: 'center'
        }, 
        {
            field: 'time',
            title: '数据时间',
            valign: 'middle',
            align: 'center'
        },
        ],
    });
});
}
if(sel2 == '机器温度'){
    $(function () {
    $("#table").bootstrapTable("destroy");
    $('#table').bootstrapTable({
        url: 'shortcodes_table_tem',  // 请求数据源的路由
        method:'GET' ,
        dataType: "json",
        // sortable: true, //是否启用排序
        // sortOrder: "asc", //排序方式
        queryParams:{ 
          time_q:data_q,
          time_z:data_z,
          sel1:sel1
        },
        sortable: true, //是否启用排序
      sortOrder: "asc", //排序方式
      pagination: true, //前端处理分页
      singleSelect: false,//是否只能单选
      search: true, //显示搜索框，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
      toolbar: '#toolbar', //工具按钮用哪个容器
      striped: true, //是否显示行间隔色
      cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pageNumber: 1, //初始化加载第10页，默认第一页
      pageSize: 10, //每页的记录行数（*）
      pageList: [10, 20, 50, 100], //可供选择的每页的行数（*）
      strictSearch: true,//设置为 true启用 全匹配搜索，false为模糊搜索
      showColumns: true, //显示内容列下拉框
      showRefresh: true, //显示刷新按钮
      minimumCountColumns: 2, //当列数小于此值时，将隐藏内容列下拉框
      clickToSelect: true, //设置true， 将在点击某行时，自动勾选rediobox 和 checkbox
      uniqueId: "id", //每一行的唯一标识，一般为主键列
      showToggle: true, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
      showToggle: false, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      detailView: false, //是否显示父子表
      clickToSelect: true,
        columns: [{  //定义表头,这个表头必须定义,下边field后边跟的字段名字必须与后端传递的字段名字相同.如:id、name、price 跟后端的字段名id  name price是完全一样的.

            field: 'id',
            title: '数据序号',
            align: 'center',
            valign: 'middle',  //对齐方式，居中
            width: '200px'  // 可以写各种样式#}

        }, {
            field: 'temperature',
            title: '温度数值',
            valign: 'middle',
            align: 'center'
        }, 
        {
            field: 'time',
            title: '数据时间',
            valign: 'middle',
            align: 'center'
        },
        ],
    });
});
}
if(sel2 == '噪音'){
    $(function () {
    $("#table").bootstrapTable("destroy");
    $('#table').bootstrapTable({
        url: 'shortcodes_table_no',  // 请求数据源的路由
        method:'GET' ,
        dataType: "json",
        // sortable: true, //是否启用排序
        // sortOrder: "asc", //排序方式
        queryParams:{ 
          time_q:data_q,
          time_z:data_z,
          sel1:sel1
        },
        sortable: true, //是否启用排序
      sortOrder: "asc", //排序方式
      pagination: true, //前端处理分页
      singleSelect: false,//是否只能单选
      search: true, //显示搜索框，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
      toolbar: '#toolbar', //工具按钮用哪个容器
      striped: true, //是否显示行间隔色
      cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pageNumber: 1, //初始化加载第10页，默认第一页
      pageSize: 10, //每页的记录行数（*）
      pageList: [10, 20, 50, 100], //可供选择的每页的行数（*）
      strictSearch: true,//设置为 true启用 全匹配搜索，false为模糊搜索
      showColumns: true, //显示内容列下拉框
      showRefresh: true, //显示刷新按钮
      minimumCountColumns: 2, //当列数小于此值时，将隐藏内容列下拉框
      clickToSelect: true, //设置true， 将在点击某行时，自动勾选rediobox 和 checkbox
      uniqueId: "id", //每一行的唯一标识，一般为主键列
      showToggle: true, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
      showToggle: false, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      detailView: false, //是否显示父子表
      clickToSelect: true,
        columns: [{  //定义表头,这个表头必须定义,下边field后边跟的字段名字必须与后端传递的字段名字相同.如:id、name、price 跟后端的字段名id  name price是完全一样的.

            field: 'id',
            title: '数据序号',
            align: 'center',
            valign: 'middle',  //对齐方式，居中
            width: '200px'  // 可以写各种样式#}

        }, {
            field: 'amplitude',
            title: '噪音振幅',
            valign: 'middle',
            align: 'center'
        }, 
        {
            field: 'frequency',
            title: '噪音频率',
            valign: 'middle',
            align: 'center'
        },
        {
            field: 'time',
            title: '数据时间',
            valign: 'middle',
            align: 'center'
        },
        ],
    });
});
}
}
