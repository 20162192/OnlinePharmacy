"use strict";
Page({
    data: {
        classShow: false,
        isNull: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxPQUFPLEVBQVA7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQVE7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsRUFBRTtvQkFDMUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsb0JBQW9CO3dCQUMzQixPQUFPLEVBQVAsVUFBUSxHQUFROzRCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2hCLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFBO3dCQUN2QyxDQUFDO3dCQUNELElBQUksRUFBSixVQUFLLEdBQVE7NEJBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDbEIsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7cUJBQU0sSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssU0FBUyxFQUFFO29CQUM5RCxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sWUFBQyxHQUFHOzRCQUNULEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFBOzRCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDakMsQ0FBQzt3QkFDRCxJ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R0FBUTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtnQkFDMUIsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBUDtRQUNFLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFRO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBQ2pDLENBQUM7WUFDRCxJQUFJLEVBQUosVUFBSyxHQUFRO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBQy9CLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCO1FBQ0UsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLEdBQVE7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNyQyxDQUFDLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3RDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3RDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9ob21lL2luZGV4LmpzXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBjbGFzc1Nob3c6IGZhbHNlLCAvLyDliIbnsbvlvLnnqpfmmK/lkKblsZXnpLpcclxuICAgIGlzTnVsbDogZmFsc2UsIC8vIOaVsOaNruS4uuepulxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXR0aW5nKClcclxuICB9LFxyXG5cclxuICBzZXR0aW5nKCkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgIGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSkge1xyXG4gICAgICAgICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgc2NvcGU6IFwic2NvcGUudXNlckxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgX3RoaXMuc3RhcnRMb2NhdGlvblVwZGF0ZUJhY2tncm91bmQoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB3eC5vcGVuU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuc3RhcnRMb2NhdGlvblVwZGF0ZUJhY2tncm91bmQoKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVuU2V0dGluZycsIHJlcylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlblNldHRpbmcnLCByZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIF90aGlzLnN0YXJ0TG9jYXRpb25VcGRhdGVCYWNrZ3JvdW5kKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBzdGFydExvY2F0aW9uVXBkYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgd3guc3RhcnRMb2NhdGlvblVwZGF0ZUJhY2tncm91bmQoe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlkK/lkI7lj7DlrprkvY0nLCByZXMpXHJcbiAgICAgICAgX3RoaXMuc3RhcnRMb2NhdGlvblVwZGF0ZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+W8gOWQr+WQjuWPsOWumuS9jeWksei0pScsIHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHN0YXJ0TG9jYXRpb25VcGRhdGUoKSB7XHJcbiAgICB3eC5zdGFydExvY2F0aW9uVXBkYXRlKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRMb2NhdGlvblVwZGF0ZScsIHJlcylcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRMb2NhdGlvblVwZGF0ZScsIHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG4gIGxvZ2luKCkge1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfmiJDlip/lm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAn6ZSZ6K+v5Zue6LCDJylcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGUocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfnu5PmnZ/lm57osIMnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY2xpY2tUYWIoKSB7XHJcbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XHJcbiAgICAgIGxhbmc6IFwiemhfVFdcIixcclxuICAgICAgZGVzYzogJ+a1i+ivleS4gOS4i+iOt+WPlueUqOaIt+S/oeaBrycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+aIkOWKn+WbnuiwgycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfplJnor6/lm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZShyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+e7k+adn+WbnuiwgycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICB0b1Nob3dDbGFzcygpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNsYXNzU2hvdzogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRvSGlkZGVuQ2xhc3MoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjbGFzc1Nob3c6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdG9TaG93QWRkcmVzcygpIHtcclxuICAgIHd4LmNob29zZVBvaSh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfmiJDlip/lm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAn5aSx6LSl5Zue6LCDJylcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGUocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfnu5PmnZ/lm57osIMnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY2hvb3NlQ29udGFjdCgpIHtcclxuICAgIHd4LmNob29zZUNvbnRhY3Qoe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfmiJDlip/lm57osIMnKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAn6ZSZ6K+v5Zue6LCDJylcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGUocmVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfnu5PmnZ/lm57osIMnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdG9Qcm9taXNlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc29sdmUsIHJlamVjdCwgJ3Jlc29sdmUtLS1yZWplY3QnKVxyXG4gICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfmiJDlip/lm57osIMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChyZXM6IGFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAn6ZSZ6K+v5Zue6LCDJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBsZXRlKHJlczogYW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfnu5PmnZ/lm57osIMnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBnb0xvZ2luKCkge1xyXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xyXG4gICAgICBkZXNjOiAn55m75b2V5o6I5p2DJyxcclxuICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3Jlcy0tLWxvZ2luJylcclxuICAgICAgfSxcclxuICAgICAgZmFpbChlcnI6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ2Vyci0tLW1haicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvY2F0aW9uQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgX2xvY2F0aW9uQ2hhbmdlRm4gPSBmdW5jdGlvbiAocmVzOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIGNoYW5nZScsIHJlcylcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKF9sb2NhdGlvbkNoYW5nZUZuLCAnPz8/PycpXHJcbiAgICB3eC5vbkxvY2F0aW9uQ2hhbmdlKF9sb2NhdGlvbkNoYW5nZUZuKVxyXG4gICAgd3gub2ZmTG9jYXRpb25DaGFuZ2UoX2xvY2F0aW9uQ2hhbmdlRm4pXHJcbiAgfVxyXG59KSJdfQ==