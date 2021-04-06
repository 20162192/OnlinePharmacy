Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    background: [
      'https://img.alicdn.com/tfs/TB1qjw.w7Y2gK0jSZFgXXc5OFXa-1190-400.jpg',
      'https://gw.alicdn.com/tfs/TB10Y9dACf2gK0jSZFPXXXsopXa-1190-400.png',
      'https://gw.alicdn.com/tfs/TB1sU5lJO_1gK0jSZFqXXcpaXXa-1190-400.png',
      'https://img.alicdn.com/tfs/TB1bzN_j29TBuNjy0FcXXbeiFXa-990-400.jpg_q60.jpg',
      'https://img.alicdn.com/tfs/TB1eyGOkTJYBeNjy1zeXXahzVXa-990-400.jpg_q60.jpg',
      'https://img.alicdn.com/tfs/TB1bzN_j29TBuNjy0FcXXbeiFXa-990-400.jpg_q60.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    intervalChange(e: any) {
      this.setData({
        interval: e.detail.value
      })
    },

    durationChange(e: any) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
})
