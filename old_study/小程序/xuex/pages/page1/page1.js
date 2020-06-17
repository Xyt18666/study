// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts_key: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1)
    var post_Con = [
      {
        date: "2020.02.02",
        title: "标题",
        images: {
          img1: "/images/big-8.jpg",
          img2: "/images/big-7.jpg"
        },
        num1: "12",
        num2: "16"
      },{
          date: "2020.02.03",
          title: "标题",
          images: {
            img1: "/images/big-8.jpg",
            img2: "/images/big-7.jpg"
          },
          num1: "123333",
          num2: "163333"
        }
      ]

    this.setData({
      posts_key: post_Con
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})