Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '', // 药品id
    info: {
      id: 1,
      img: 'https://img.alicdn.com/imgextra/i4/2928278102/O1CN01rXEqww29ilb0H0Fgq_!!2928278102-0-sm.jpg_430x430q90.jpg',
      name: '白云山板蓝根颗粒20袋清热解毒咽喉肿痛感冒药冲剂',
      price: 5.30,
      des: "鼻炎喷雾剂布地奈德喷剂120鼻炎药膏根治过敏性儿童鼻炎"
    }, // 药品详情
    tip: "消费提醒：请仔细阅读药品说明书注意事项、禁忌等内容，按说明书或在药师指导下购买和使用，将药品置于儿童无法触及位置"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },
  /**
   * 加入购物车
   */
  addBuy() {
    wx.showToast({
      title: "加入购物车成功"
    })
  },
  /**
   * 联系客服
   */
  call() {
    wx.makePhoneCall({
      phoneNumber: "15177229001"
    })
  }
})