"use strict";
Component({
    properties: {},
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
    methods: {
        intervalChange: function (e) {
            this.setData({
                interval: e.detail.value
            });
        },
        durationChange: function (e) {
            this.setData({
                duration: e.detail.value
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBRVg7SUFLRCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUU7WUFDVixxRUFBcUU7WUFDckUsb0VBQW9FO1lBQ3BFLG9FQUFvRTtZQUNwRSw0RUFBNEU7WUFDNUUsNEVBQTRFO1lBQzVFLDRFQUE0RTtTQUM3RTtRQUNELGFBQWEsRUFBRSxJQUFJO1FBQ25CLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBZCxVQUFlLENBQU07WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQ3pCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxjQUFjLEVBQWQsVUFBZSxDQUFNO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzthQUN6QixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG4gICAqL1xyXG4gIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgYmFja2dyb3VuZDogW1xyXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnMvVEIxcWp3Lnc3WTJnSzBqU1pGZ1hYYzVPRlhhLTExOTAtNDAwLmpwZycsXHJcbiAgICAgICdodHRwczovL2d3LmFsaWNkbi5jb20vdGZzL1RCMTBZOWRBQ2YyZ0swalNaRlBYWFhzb3BYYS0xMTkwLTQwMC5wbmcnLFxyXG4gICAgICAnaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rmcy9UQjFzVTVsSk9fMWdLMGpTWkZxWFhjcGFYWGEtMTE5MC00MDAucG5nJyxcclxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdGZzL1RCMWJ6Tl9qMjlUQnVOankwRmNYWGJlaUZYYS05OTAtNDAwLmpwZ19xNjAuanBnJyxcclxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdGZzL1RCMWV5R09rVEpZQmVOankxemVYWGFoelZYYS05OTAtNDAwLmpwZ19xNjAuanBnJyxcclxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdGZzL1RCMWJ6Tl9qMjlUQnVOankwRmNYWGJlaUZYYS05OTAtNDAwLmpwZ19xNjAuanBnJ1xyXG4gICAgXSxcclxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGludGVydmFsOiAyMDAwLFxyXG4gICAgZHVyYXRpb246IDUwMCxcclxuICAgIGNpcmN1bGFyOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgaW50ZXJ2YWxDaGFuZ2UoZTogYW55KSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGR1cmF0aW9uQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGR1cmF0aW9uOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19