//index.js
//获取应用实例
var app = getApp()
Page({
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    this.toList(e.detail.value);
  },
  requests: function(_data, success, fail) {
    wx.request({
    url: 'http://www.baidu.com',
    data: _data,
    header: {'content-type': 'application/json'},
    success: success,
    fail: fail
    })
  },
  toList:function(_data){
    this.requests(_data,function(res){console.log("请求数据成功：" + res.data)},function(msg){console.log("请求数据失败：" + msg.data)});
  }
})
