// miniprogram/pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classShow: false, // 分类弹窗是否展示
    isNull: false, // 数据为空
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
    this.setting()
  },

  setting() {
    const _this = this
    wx.getSetting({
      success(res: any) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: "scope.userLocation",
            success(res: any) {
              console.log(res)
              _this.startLocationUpdateBackground()
            },
            fail(res: any) {
              console.log(res)
            }
          })
        } else if (res.authSetting['scope.userLocation'] === undefined) {
          wx.openSetting({
            success(res) {
              _this.startLocationUpdateBackground()
              console.log('openSetting', res)
            },
            fail(res) {
              console.log('openSetting', res)
            }
          })
        } else {
          _this.startLocationUpdateBackground()
        }
      }
    })
  },
  startLocationUpdateBackground() {
    const _this = this
    wx.startLocationUpdateBackground({
      success(res) {
        console.log('开启后台定位', res)
        _this.startLocationUpdate()
      },
      fail(res) {
        console.log('开启后台定位失败', res)
      }
    })
  },
  startLocationUpdate() {
    wx.startLocationUpdate({
      success(res) {
        console.log('startLocationUpdate', res)
      },
      fail(res) {
        console.log('startLocationUpdate', res)
      }
    })
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
  login() {
    wx.login({
      success: function (res: any) {
        console.log(res, '成功回调')
      },
      fail(res: any) {
        console.log(res, '错误回调')
      },
      complete(res: any) {
        console.log(res, '结束回调')
      }
    })
  },
  clickTab() {
    wx.getUserProfile({
      lang: "zh_TW",
      desc: '测试一下获取用户信息',
      success: function (res: any) {
        console.log(res, '成功回调')
      },
      fail(res: any) {
        console.log(res, '错误回调')
      },
      complete(res: any) {
        console.log(res, '结束回调')
      }
    })
  },
  toShowClass() {
    this.setData({
      classShow: true
    })
  },
  toHiddenClass() {
    this.setData({
      classShow: false
    })
  },
  toShowAddress() {
    wx.choosePoi({
      success(res: any) {
        console.log(res, '成功回调')
      },
      fail(res: any) {
        console.log(res, '失败回调')
      },
      complete(res: any) {
        console.log(res, '结束回调')
      }
    })
  },
  chooseContact() {
    wx.chooseContact({
      success: function (res: any) {
        console.log(res, '成功回调')
      },
      fail(res: any) {
        console.log(res, '错误回调')
      },
      complete(res: any) {
        console.log(res, '结束回调')
      }
    })
  },
  toPromise() {
    return new Promise((resolve: any, reject: any) => {
      console.log(resolve, reject, 'resolve---reject')
      wx.login({
        success: function (res: any) {
          console.log(res, '成功回调')
        },
        fail(res: any) {
          console.log(res, '错误回调')
        },
        complete(res: any) {
          console.log(res, '结束回调')
        }
      })
    })
  },
  goLogin() {
    wx.getUserProfile({
      desc: '登录授权',
      success(res: any) {
        console.log(res, 'res---login')
      },
      fail(err: any) {
        console.log(err, 'err---maj')
      }
    })
  },
  onLocationChange() {
    const _locationChangeFn = function (res: any) {
      console.log('location change', res)
    }
    console.log(_locationChangeFn, '????')
    wx.onLocationChange(_locationChangeFn)
    wx.offLocationChange(_locationChangeFn)
  }
})