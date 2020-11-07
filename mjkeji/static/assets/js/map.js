 //创建和初始化地图函数：
 function initMap(){
  createMap();//创建地图
  setMapEvent();//设置地图事件
  addMapControl();//向地图添加控件
  addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap(){
  var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
  var point = new BMap.Point(117.002688,36.184621);//定义一个中心点坐标
  map.centerAndZoom(point,6);//设定地图的中心点和坐标并将地图显示在地图容器中
  window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
  map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
  map.enableScrollWheelZoom();//启用地图滚轮放大缩小
  map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
                  }

//标注点数组
var markerArr = [{title:'<a href=#start>A</a>',content:"厂区A",point:"117.002652|36.184504",isOpen:0,icon:{w:23,h:25,l:0,t:21,x:9,lb:12}}
];
//创建marker
function addMarker(){
  var points = [
    [117.002688,36.184621],
    
];
var points1 = [
[117.11184,31.830306], 
];
for( var i = 0;i < points.length; i++){
  var myIcon = new BMap.Icon("static/assets/images/icon_greenmarker.png", new BMap.Size(25, 40), {
      // 指定定位位置
      offset: new BMap.Size(10, 25),
      // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
      //imageOffset: new BMap.Size(0, 0 - i * 25) // 设置图片偏移  
      
  });
  var point = new BMap.Point(points[i][0],points[i][1]);
  var marker = new BMap.Marker(point,{icon: myIcon});
  map.addOverlay(marker);
  var label = new BMap.Label("<a href=#start>工厂A</a>",{"offset":new BMap.Size(25,20)});
  
  marker.setLabel(label);
  label.setStyle({
    borderColor:"#808080",
    color:"#333",
    cursor:"pointer"
});
}
  for( var j = 0;j < points1.length; j++){
    var myIcon = new BMap.Icon("static/assets/images/icon_redmarker.png", new BMap.Size(25, 40), {
        // 指定定位位置
        offset: new BMap.Size(10, 25),
        // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
        //imageOffset: new BMap.Size(0, 0 - i * 25) // 设置图片偏移  
    });
    
  var point1 = new BMap.Point(points1[j][0],points1[j][1]);
  // 创建标注对象并添加到地图 
  
  
  
  var marker1 = new BMap.Marker(point1,{icon: myIcon});
  map.addOverlay(marker1);
  
  var label1 = new BMap.Label("<a href=#xx>工厂B</a>",{"offset":new BMap.Size(25,20)});
  marker1.setLabel(label1);
  
label1.setStyle({
  borderColor:"#808080",
  color:"#333",
  cursor:"pointer"
});
};

}
//创建InfoWindow
function createInfoWindow(i){
  var json = markerArr[i];
  var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
  return iw;
}
//创建一个Icon


initMap();
