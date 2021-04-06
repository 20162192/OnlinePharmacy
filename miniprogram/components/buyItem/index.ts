Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  pageLifetimes: {
    show() {
      // console.log(this.properties.item)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // goPage(e: any) {
    //   const id = e.currentTarget.dataset.id
    //   wx.navigateTo({
    //     url: "/pages/goods/index?id=" + id
    //   })
    // }
  }
})
