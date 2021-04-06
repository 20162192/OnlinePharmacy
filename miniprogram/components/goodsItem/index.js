"use strict";
Component({
    properties: {
        item: {
            type: Object,
            value: {}
        }
    },
    data: {},
    pageLifetimes: {
        show: function () {
        }
    },
    methods: {
        goPage: function (e) {
            var id = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/goods/index?id=" + id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUk7UUFFSixDQUFDO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQU4sVUFBTyxDQUFNO1lBQ1gsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1lBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHdCQUF3QixHQUFHLEVBQUU7YUFDbkMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBpdGVtOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgdmFsdWU6IHt9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG5cclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6IHtcclxuICAgIHNob3coKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcGVydGllcy5pdGVtKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAqL1xyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdvUGFnZShlOiBhbnkpIHtcclxuICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL3BhZ2VzL2dvb2RzL2luZGV4P2lkPVwiICsgaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==