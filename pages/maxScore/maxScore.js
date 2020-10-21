Page({
  data: {
    maxscore: 0
  },

  onLoad: function (options) {
    var score = wx.getStorageSync('maxscore')
    this.setData({
      maxscore: score
    })
  },

})