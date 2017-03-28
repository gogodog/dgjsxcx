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
    this.requests(_data,
    function(res){
      console.log("请求数据失败：" + msg.data);
        res.results = [{name:'1',value:'lishi',key:'中国'},{name:'2',value:'lishi1',key:'美国'},{name:'3',value:'lishi2',key:'荷兰'}];

      var params = res.results;
      //去列表页面
      wx.navigateTo({
        url:"../list/list?params="+JSON.stringify(params),
        success:function(res){
          console.log('ok:' + JSON.stringify(res));
        },
        fail:function(res){
          console.log('fail:' + JSON.stringify(res));
        },
        complete:function(res){
          console.log('complete:' + JSON.stringify(res));
        }
      })
      },function(res){
        console.log("请求数据失败：" + res.data);
        res.results = [{name:'1',value:'lishi',key:'中国'},{name:'2',value:'lishi1',key:'美国'},{name:'3',value:'lishi2',key:'荷兰'}];

      var params = res.results;
      //去列表页面
      wx.navigateTo({
        url:"../list/list?params="+JSON.stringify(params),
        success:function(res){
          console.log('ok:' + JSON.stringify(res));
        },
        fail:function(res){
          console.log('fail:' + JSON.stringify(res));
        },
        complete:function(res){
          console.log('complete:' + JSON.stringify(res));
        }
      })
      });
  }
})
