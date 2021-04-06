Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '', // 搜索内容
    from: 'list', // 搜索子组件
    isNull: false, // 数据为空
    list: [
      {
        id: 1,
        img: 'https://img.alicdn.com/imgextra/i4/2928278102/O1CN01rXEqww29ilb0H0Fgq_!!2928278102-0-sm.jpg_430x430q90.jpg',
        name: '药品名称',
        price: 5.30
      },
      {
        id: 2,
        img: 'https://img.alicdn.com/imgextra/i2/2928278102/O1CN01VMKmzb29ilb4VNTVt_!!2928278102-0-sm.jpg_430x430q90.jpg',
        name: '中国香港京都念慈菴蜜炼川贝枇杷膏300ml润肺止咳糖浆感冒咳嗽药',
        price: 48.00
      },
      {
        id: 3,
        img: 'https://img.alicdn.com/imgextra/i1/2928278102/O1CN01JWmsv329ilasQSsfF_!!2928278102-0-sm.jpg_430x430q90.jpg',
        name: '前列康片60片普乐安片前列腺炎增生尿频尿急前列康胶囊补肾',
        price: 119.00
      }
    ] //商品列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      value: options.value
    })
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
  // 搜索
  goSearch(e: any) {
    this.setData({
      value: e.detail
    })
  }
})