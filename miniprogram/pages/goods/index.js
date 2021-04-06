"use strict";
Page({
    data: {
        id: '',
        info: {
            id: 1,
            img: 'https://img.alicdn.com/imgextra/i4/2928278102/O1CN01rXEqww29ilb0H0Fgq_!!2928278102-0-sm.jpg_430x430q90.jpg',
            name: '白云山板蓝根颗粒20袋清热解毒咽喉肿痛感冒药冲剂',
            price: 5.30,
            des: "鼻炎喷雾剂布地奈德喷剂120鼻炎药膏根治过敏性儿童鼻炎"
        },
        tip: "消费提醒：请仔细阅读药品说明书注意事项、禁忌等内容，按说明书或在药师指导下购买和使用，将药品置于儿童无法触及位置"
    },
    onLoad: function (options) {
        console.log(options);
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
    addBuy: function () {
        wx.showToast({
            title: "加入购物车成功"
        });
    },
    call: function () {
        wx.makePhoneCall({
            phoneNumber: "15177229001"
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsQ0FBQztZQUNMLEdBQUcsRUFBRSw0R0FBNEc7WUFDakgsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQyxLQUFLLEVBQUUsSUFBSTtZQUNYLEdBQUcsRUFBRSw2QkFBNkI7U0FDbkM7UUFDRCxHQUFHLEVBQUUsMERBQTBEO0tBQ2hFO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBSUQsTUFBTTtRQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBSUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGlkOiAnJywgLy8g6I2v5ZOBaWRcclxuICAgIGluZm86IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMjkyODI3ODEwMi9PMUNOMDFyWEVxd3cyOWlsYjBIMEZncV8hITI5MjgyNzgxMDItMC1zbS5qcGdfNDMweDQzMHE5MC5qcGcnLFxyXG4gICAgICBuYW1lOiAn55m95LqR5bGx5p2/6JOd5qC56aKX57KSMjDooovmuIXng63op6Pmr5Llkr3llonogr/nl5vmhJ/lhpLoja/lhrLliYInLFxyXG4gICAgICBwcmljZTogNS4zMCxcclxuICAgICAgZGVzOiBcIum8u+eCjuWWt+mbvuWJguW4g+WcsOWliOW+t+WWt+WJgjEyMOm8u+eCjuiNr+iGj+agueayu+i/h+aVj+aAp+WEv+erpem8u+eCjlwiXHJcbiAgICB9LCAvLyDoja/lk4Hor6bmg4VcclxuICAgIHRpcDogXCLmtojotLnmj5DphpLvvJror7fku5Tnu4bpmIXor7voja/lk4Hor7TmmI7kuabms6jmhI/kuovpobnjgIHnpoHlv4znrYnlhoXlrrnvvIzmjInor7TmmI7kuabmiJblnKjoja/luIjmjIflr7zkuIvotK3kubDlkozkvb/nlKjvvIzlsIboja/lk4Hnva7kuo7lhL/nq6Xml6Dms5Xop6blj4rkvY3nva5cIlxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDliqDlhaXotK3nianovaZcclxuICAgKi9cclxuICBhZGRCdXkoKSB7XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogXCLliqDlhaXotK3nianovabmiJDlip9cIlxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOiBlOezu+WuouacjVxyXG4gICAqL1xyXG4gIGNhbGwoKSB7XHJcbiAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgcGhvbmVOdW1iZXI6IFwiMTUxNzcyMjkwMDFcIlxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19