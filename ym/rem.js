(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;   // 屏幕的宽
                if (!clientWidth) return;  // 如果没找到就返回
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';  // 修改html的字体大小
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);


    /*
如果页面的宽度超过了640px，那么页面中html的font-size恒为100px，
否则，页面中html的font-size的大小为： 100 * (当前页面宽度 / 640)

    */ 