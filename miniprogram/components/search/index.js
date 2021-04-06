"use strict";
Component({
    properties: {
        value: {
            type: String,
            value: ''
        },
        from: {
            type: String,
            value: ''
        }
    },
    data: {
        value: ''
    },
    pageLifetimes: {
        show: function () {
            this.setData({
                value: this.properties.value
            });
        }
    },
    methods: {
        input: function (e) {
            this.setData({
                value: e.detail.value
            });
        },
        goSearch: function () {
            if (this.data.from) {
                this.triggerEvent('goSearch', this.data.value);
            }
            else {
                wx.navigateTo({
                    url: "/pages/list/index?value=" + this.data.value
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFHO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFJRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsYUFBYSxFQUFDO1FBQ1osSUFBSTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSzthQUM3QixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFJRCxPQUFPLEVBQUU7UUFLUCxLQUFLLEVBQUwsVUFBTSxDQUFNO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQ3RCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFJRCxRQUFRO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUMvQztpQkFBTTtnQkFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7aUJBQ2xELENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB2YWx1ZTogIHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH0sXHJcbiAgICBmcm9tOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICB2YWx1ZTogJycgLy8g5pCc57Si5YaF5a65XHJcbiAgfSxcclxuXHJcbiAgcGFnZUxpZmV0aW1lczp7XHJcbiAgICBzaG93KCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcGVydGllcy52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmkJzntKLovpPlhaVcclxuICAgICAqIEBwYXJhbSBlIOeCueWHu+S6i+S7tlxyXG4gICAgICovXHJcbiAgICBpbnB1dChlOiBhbnkpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWJjeW+gOaQnOe0oumhtVxyXG4gICAgICovXHJcbiAgICBnb1NlYXJjaCgpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5mcm9tKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2dvU2VhcmNoJywgdGhpcy5kYXRhLnZhbHVlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9saXN0L2luZGV4P3ZhbHVlPVwiICsgdGhpcy5kYXRhLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19