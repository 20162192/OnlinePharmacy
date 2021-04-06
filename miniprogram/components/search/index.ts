Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:  {
      type: String,
      value: ''
    },
    from: {
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    value: '' // 搜索内容
  },

  pageLifetimes:{
    show(){
      this.setData({
        value: this.properties.value
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 搜索输入
     * @param e 点击事件
     */
    input(e: any) {
      this.setData({
        value: e.detail.value
      })
    },
    /**
     * 前往搜索页
     */
    goSearch() {
      if (this.data.from) {
        this.triggerEvent('goSearch', this.data.value)
      } else {
        wx.navigateTo({
          url: "/pages/list/index?value=" + this.data.value
        })
      }
    }
  }
})
