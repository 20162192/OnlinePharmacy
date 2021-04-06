"use strict";
Page({
    data: {
        value: '',
        from: 'list',
        isNull: false,
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
        ]
    },
    onLoad: function (options) {
        this.setData({
            value: options.value
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    },
    goSearch: function (e) {
        this.setData({
            value: e.detail
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLDRHQUE0RztnQkFDakgsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSw0R0FBNEc7Z0JBQ2pILElBQUksRUFBRSxrQ0FBa0M7Z0JBQ3hDLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsNEdBQTRHO2dCQUNqSCxJQUFJLEVBQUUsOEJBQThCO2dCQUNwQyxLQUFLLEVBQUUsTUFBTTthQUNkO1NBQ0Y7S0FDRjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUVELFFBQVEsRUFBUixVQUFTLENBQU07UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgdmFsdWU6ICcnLCAvLyDmkJzntKLlhoXlrrlcclxuICAgIGZyb206ICdsaXN0JywgLy8g5pCc57Si5a2Q57uE5Lu2XHJcbiAgICBpc051bGw6IGZhbHNlLCAvLyDmlbDmja7kuLrnqbpcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMjkyODI3ODEwMi9PMUNOMDFyWEVxd3cyOWlsYjBIMEZncV8hITI5MjgyNzgxMDItMC1zbS5qcGdfNDMweDQzMHE5MC5qcGcnLFxyXG4gICAgICAgIG5hbWU6ICfoja/lk4HlkI3np7AnLFxyXG4gICAgICAgIHByaWNlOiA1LjMwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBpbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI5MjgyNzgxMDIvTzFDTjAxVk1LbXpiMjlpbGI0Vk5UVnRfISEyOTI4Mjc4MTAyLTAtc20uanBnXzQzMHg0MzBxOTAuanBnJyxcclxuICAgICAgICBuYW1lOiAn5Lit5Zu96aaZ5riv5Lqs6YO95b+15oWI6I+06Jyc54K85bed6LSd5p6H5p236IaPMzAwbWzmtqbogrrmraLlkrPns5bmtYbmhJ/lhpLlkrPll73oja8nLFxyXG4gICAgICAgIHByaWNlOiA0OC4wMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8yOTI4Mjc4MTAyL08xQ04wMUpXbXN2MzI5aWxhc1FTc2ZGXyEhMjkyODI3ODEwMi0wLXNtLmpwZ180MzB4NDMwcTkwLmpwZycsXHJcbiAgICAgICAgbmFtZTogJ+WJjeWIl+W6t+eJhzYw54mH5pmu5LmQ5a6J54mH5YmN5YiX6IW654KO5aKe55Sf5bC/6aKR5bC/5oCl5YmN5YiX5bq36IO25ZuK6KGl6IK+JyxcclxuICAgICAgICBwcmljZTogMTE5LjAwXHJcbiAgICAgIH1cclxuICAgIF0gLy/llYblk4HliJfooahcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHZhbHVlOiBvcHRpb25zLnZhbHVlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG4gIC8vIOaQnOe0olxyXG4gIGdvU2VhcmNoKGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmFsdWU6IGUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=