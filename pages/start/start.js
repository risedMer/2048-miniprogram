Page({
  start:function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },

  maxScore:function() {
    wx.redirectTo({
      url: '../maxScore/maxScore',
    })
  },

  about:function() {
    wx.redirectTo({
      url: '../about/about',
    })
  }
})