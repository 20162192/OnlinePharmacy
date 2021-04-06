"use strict";
Page({
    data: {
        classShow: false,
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
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow: function () {
        this.setting();
    },
    setting: function () {
        var _this = this;
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.userLocation']) {
                    wx.authorize({
                        scope: "scope.userLocation",
                        success: function (res) {
                            console.log(res);
                            _this.startLocationUpdateBackground();
                        },
                        fail: function (res) {
                            console.log(res);
                        }
                    });
                }
                else if (res.authSetting['scope.userLocation'] === undefined) {
                    wx.openSetting({
                        success: function (res) {
                            _this.startLocationUpdateBackground();
                            console.log('openSetting', res);
                        },
                        fail: function (res) {
                            console.log('openSetting', res);
                        }
                    });
                }
                else {
                    _this.startLocationUpdateBackground();
                }
            }
        });
    },
    startLocationUpdateBackground: function () {
        var _this = this;
        wx.startLocationUpdateBackground({
            success: function (res) {
                console.log('开启后台定位', res);
                _this.startLocationUpdate();
            },
            fail: function (res) {
                console.log('开启后台定位失败', res);
            }
        });
    },
    startLocationUpdate: function () {
        wx.startLocationUpdate({
            success: function (res) {
                console.log('startLocationUpdate', res);
            },
            fail: function (res) {
                console.log('startLocationUpdate', res);
            }
        });
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
    login: function () {
        wx.login({
            success: function (res) {
                console.log(res, '成功回调');
            },
            fail: function (res) {
                console.log(res, '错误回调');
            },
            complete: function (res) {
                console.log(res, '结束回调');
            }
        });
    },
    clickTab: function () {
        wx.getUserProfile({
            lang: "zh_TW",
            desc: '测试一下获取用户信息',
            success: function (res) {
                console.log(res, '成功回调');
            },
            fail: function (res) {
                console.log(res, '错误回调');
            },
            complete: function (res) {
                console.log(res, '结束回调');
            }
        });
    },
    toShowClass: function () {
        this.setData({
            classShow: true
        });
    },
    toHiddenClass: function () {
        this.setData({
            classShow: false
        });
    },
    toShowAddress: function () {
        wx.choosePoi({
            success: function (res) {
                console.log(res, '成功回调');
            },
            fail: function (res) {
                console.log(res, '失败回调');
            },
            complete: function (res) {
                console.log(res, '结束回调');
            }
        });
    },
    chooseContact: function () {
        wx.chooseContact({
            success: function (res) {
                console.log(res, '成功回调');
            },
            fail: function (res) {
                console.log(res, '错误回调');
            },
            complete: function (res) {
                console.log(res, '结束回调');
            }
        });
    },
    toPromise: function () {
        return new Promise(function (resolve, reject) {
            console.log(resolve, reject, 'resolve---reject');
            wx.login({
                success: function (res) {
                    console.log(res, '成功回调');
                },
                fail: function (res) {
                    console.log(res, '错误回调');
                },
                complete: function (res) {
                    console.log(res, '结束回调');
                }
            });
        });
    },
    goLogin: function () {
        wx.getUserProfile({
            desc: '登录授权',
            success: function (res) {
                console.log(res, 'res---login');
            },
            fail: function (err) {
                console.log(err, 'err---maj');
            }
        });
    },
    onLocationChange: function () {
        var _locationChangeFn = function (res) {
            console.log('location change', res);
        };
        console.log(_locationChangeFn, '????');
        wx.onLocationChange(_locationChangeFn);
        wx.offLocationChange(_locationChangeFn);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUU7WUFDSjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsNEdBQTRHO2dCQUNqSCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLDRHQUE0RztnQkFDakgsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSw0R0FBNEc7Z0JBQ2pILElBQUksRUFBRSw4QkFBOEI7Z0JBQ3BDLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtLQUNGO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7UUFDTixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELE9BQU8sRUFBUDtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBUTtnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO29CQUMxQyxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBRSxvQkFBb0I7d0JBQzNCLE9BQU8sRUFBUCxVQUFRLEdBQVE7NEJBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs0QkFDaEIsS0FBSyxDQUFDLDZCQUE2QixFQUFFLENBQUE7d0JBQ3ZD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LENBQUE7UUFDdEMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDekMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1pbmlwcm9ncmFtL3BhZ2VzL2hvbWUvaW5kZXguanNcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGNsYXNzU2hvdzogZmFsc2UsIC8vIOWIhuexu+W8ueeql+aYr+WQpuWxleekulxyXG4gICAgaXNOdWxsOiBmYWxzZSwgLy8g5pWw5o2u5Li656m6XHJcbiAgICBsaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI5MjgyNzgxMDIvTzFDTjAxclhFcXd3MjlpbGIwSDBGZ3FfISEyOTI4Mjc4MTAyLTAtc20uanBnXzQzMHg0MzBxOTAuanBnJyxcclxuICAgICAgICBuYW1lOiAn6I2v5ZOB5ZCN56ewJyxcclxuICAgICAgICBwcmljZTogNS4zMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9pbWdleHRyYS9pMi8yOTI4Mjc4MTAyL08xQ04wMVZNS216YjI5aWxiNFZOVFZ0XyEhMjkyODI3ODEwMi0wLXNtLmpwZ180MzB4NDMwcTkwLmpwZycsXHJcbiAgICAgICAgbmFtZTogJ+S4reWbvemmmea4r+S6rOmDveW/teaFiOiPtOicnOeCvOW3nei0neaeh+adt+iGjzMwMG1s5ram6IK65q2i5ZKz57OW5rWG5oSf5YaS5ZKz5Ze96I2vJyxcclxuICAgICAgICBwcmljZTogNDguMDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vaW1nZXh0cmEvaTEvMjkyODI3ODEwMi9PMUNOMDFKV21zdjMyOWlsYXNRU3NmRl8hITI5MjgyNzgxMDItMC1zbS5qcGdfNDMweDQzMHE5MC5qcGcnLFxyXG4gICAgICAgIG5hbWU6ICfliY3liJflurfniYc2MOeJh+aZruS5kOWuieeJh+WJjeWIl+iFuueCjuWinueUn+Wwv+mikeWwv+aApeWJjeWIl+W6t+iDtuWbiuihpeiCvicsXHJcbiAgICAgICAgcHJpY2U6IDExOS4wMFxyXG4gICAgICB9XHJcbiAgICBdIC8v5ZWG5ZOB5YiX6KGoXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldHRpbmcoKVxyXG4gIH0sXHJcblxyXG4gIHNldHRpbmcoKSB7XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddKSB7XHJcbiAgICAgICAgICB3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICBzY29wZTogXCJzY29wZS51c2VyTG9jYXRpb25cIixcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICBfdGhpcy5zdGFydExvY2F0aW9uVXBkYXRlQmFja2dyb3VuZCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5zdGFydExvY2F0aW9uVXBkYXRlQmFja2dyb3VuZCgpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29wZW5TZXR0aW5nJywgcmVzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVuU2V0dGluZycsIHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgX3RoaXMuc3RhcnRMb2NhdGlvblVwZGF0ZUJhY2tncm91bmQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHN0YXJ0TG9jYXRpb25VcGRhdGVCYWNrZ3JvdW5kKCkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXHJcbiAgICB3eC5zdGFydExvY2F0aW9uVXBkYXRlQmFja2dyb3VuZCh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWQr+WQjuWPsOWumuS9jScsIHJlcylcclxuICAgICAgICBfdGhpcy5zdGFydExvY2F0aW9uVXBkYXRlKClcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5byA5ZCv5ZCO5Y+w5a6a5L2N5aSx6LSlJywgcmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgc3RhcnRMb2NhdGlvblVwZGF0ZSgpIHtcclxuICAgIHd4LnN0YXJ0TG9jYXRpb25VcGRhdGUoe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydExvY2F0aW9uVXBkYXRlJywgcmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydExvY2F0aW9uVXBkYXRlJywgcmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcbiAgbG9naW4oKSB7XHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+aIkOWKn+WbnuiwgycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfplJnor6/lm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZShyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+e7k+adn+WbnuiwgycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBjbGlja1RhYigpIHtcclxuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcclxuICAgICAgbGFuZzogXCJ6aF9UV1wiLFxyXG4gICAgICBkZXNjOiAn5rWL6K+V5LiA5LiL6I635Y+W55So5oi35L+h5oGvJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAn5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+mUmeivr+WbnuiwgycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAn57uT5p2f5Zue6LCDJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRvU2hvd0NsYXNzKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2xhc3NTaG93OiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdG9IaWRkZW5DbGFzcygpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNsYXNzU2hvdzogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICB0b1Nob3dBZGRyZXNzKCkge1xyXG4gICAgd3guY2hvb3NlUG9pKHtcclxuICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+aIkOWKn+WbnuiwgycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICflpLHotKXlm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZShyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+e7k+adn+WbnuiwgycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBjaG9vc2VDb250YWN0KCkge1xyXG4gICAgd3guY2hvb3NlQ29udGFjdCh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+aIkOWKn+WbnuiwgycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfplJnor6/lm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZShyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+e7k+adn+WbnuiwgycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICB0b1Byb21pc2UoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzb2x2ZSwgcmVqZWN0LCAncmVzb2x2ZS0tLXJlamVjdCcpXHJcbiAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+aIkOWKn+WbnuiwgycpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfplJnor6/lm57osIMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGUocmVzOiBhbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+e7k+adn+WbnuiwgycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdvTG9naW4oKSB7XHJcbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XHJcbiAgICAgIGRlc2M6ICfnmbvlvZXmjojmnYMnLFxyXG4gICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAncmVzLS0tbG9naW4nKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCAnZXJyLS0tbWFqJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uTG9jYXRpb25DaGFuZ2UoKSB7XHJcbiAgICBjb25zdCBfbG9jYXRpb25DaGFuZ2VGbiA9IGZ1bmN0aW9uIChyZXM6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24gY2hhbmdlJywgcmVzKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coX2xvY2F0aW9uQ2hhbmdlRm4sICc/Pz8/JylcclxuICAgIHd4Lm9uTG9jYXRpb25DaGFuZ2UoX2xvY2F0aW9uQ2hhbmdlRm4pXHJcbiAgICB3eC5vZmZMb2NhdGlvbkNoYW5nZShfbG9jYXRpb25DaGFuZ2VGbilcclxuICB9XHJcbn0pIl19