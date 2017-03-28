//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'welcome to dgjs',
    btn_title: '大国简史',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../search/search',
      success:function(m){
        console.log('ok:' + JSON.stringify(m));
      },
      fail:function(m){
        console.log('fail:' + JSON.stringify(m));
      },
      complete:function(m){
        console.log('complete:' + JSON.stringify(m));
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
