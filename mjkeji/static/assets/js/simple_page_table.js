// 警告表格
  $(function () {
      $('#tem').bootstrapTable({
          url: '/t_warning',  // 请求数据源的路由
          method:'GET' ,
          dataType: "json",
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
              title: '警报编号',
              align: 'center',
              valign: 'middle',  //对齐方式，居中
              width: '200px'  // 可以写各种样式#}

          }, {
              field: 'device',
              title: '设备名称',
              valign: 'middle',
              align: 'center'
          }, 
          {
              field: 'type',
              title: '警告类型',
              valign: 'middle',
              align: 'center'
          },
          {
              title: '警报数据',
              field: 'warn_data',
              valign: 'middle',
              align: 'center'
              
          },
          {
              title: '警报时间',
              field: 'time',
              valign: 'middle',
              align: 'center'
              
          }
          ],
      });
  });
  $(function () {
    $('#huan').bootstrapTable({
        url: '/h_warning',  // 请求数据源的路由
        method:'GET' ,
        dataType: "json",
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
            title: '警报编号',
            align: 'center',
            valign: 'middle',  //对齐方式，居中
            width: '200px'  // 可以写各种样式#}

        }, {
            field: 'device',
            title: '设备名称',
            valign: 'middle',
            align: 'center'
        }, 
        {
            field: 'type',
            title: '警告类型',
            valign: 'middle',
            align: 'center'
        },
        {
            title: '警报数据',
            field: 'warn_data',
            valign: 'middle',
            align: 'center'
            
        },
        {
            title: '警报时间',
            field: 'time',
            valign: 'middle',
            align: 'center'
            
        }
        ],
    });
});
$(function () {
  $('#zao').bootstrapTable({
      url: '/n_warning',  // 请求数据源的路由
      method:'GET' ,
      dataType: "json",
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
          title: '警报编号',
          align: 'center',
          valign: 'middle',  //对齐方式，居中
          width: '200px'  // 可以写各种样式#}

      }, {
          field: 'device',
          title: '设备名称',
          valign: 'middle',
          align: 'center'
      }, 
      {
          field: 'type',
          title: '警告类型',
          valign: 'middle',
          align: 'center'
      },
      {
          title: '警报数据',
          field: 'warn_data',
          valign: 'middle',
          align: 'center'
          
      },
      {
          title: '警报时间',
          field: 'time',
          valign: 'middle',
          align: 'center'
          
      }
      ],
  });
});
$(function () {
  $('#pidai').bootstrapTable({
      url: '/c_warning',  // 请求数据源的路由
      method:'GET' ,
      dataType: "json",
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
          title: '警报编号',
          align: 'center',
          valign: 'middle',  //对齐方式，居中
          width: '200px'  // 可以写各种样式#}

      }, {
          field: 'device',
          title: '设备名称',
          valign: 'middle',
          align: 'center'
      }, 
      {
          field: 'type',
          title: '警告类型',
          valign: 'middle',
          align: 'center'
      },
      {
          title: '警报数据',
          field: 'warn_data',
          valign: 'middle',
          align: 'center'
          
      },
      {
          title: '警报时间',
          field: 'time',
          valign: 'middle',
          align: 'center'
          
      }
      ],
  });
});
$(function () {
  $('#lian').bootstrapTable({
      url: '/c_warning',  // 请求数据源的路由
      method:'GET' ,
      dataType: "json",
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
          title: '警报编号',
          align: 'center',
          valign: 'middle',  //对齐方式，居中
          width: '200px'  // 可以写各种样式#}

      }, {
          field: 'device',
          title: '设备名称',
          valign: 'middle',
          align: 'center'
      }, 
      {
          field: 'type',
          title: '警告类型',
          valign: 'middle',
          align: 'center'
      },
      {
          title: '警报数据',
          field: 'warn_data',
          valign: 'middle',
          align: 'center'
          
      },
      {
          title: '警报时间',
          field: 'time',
          valign: 'middle',
          align: 'center'
          
      }
      ],
  });
});


