/**
 * 拖拽指令
 */
const dragDom = {
    mounted(el: HTMLElement, binding: any, vnod: any, prevVnod: any) {
        el.style.cursor = 'move';
        el.onmousedown = (e) => {
            el.style.position = 'fixed';
            // 记录鼠标点击元素位置，鼠标位置减元素上左边距位置
            let disX = e.pageX - el.offsetLeft;
            let disY = e.pageY - el.offsetTop;

            // const elStyle = el.currentStyle || window.getComputedStyle(el);
            // 鼠标移动事件，元素距离上左位置，判断有没有出窗口
            document.onmousemove = (e) => {
                let x = e.pageX - disX;
                let y = e.pageY - disY;

                let maxX = document.body.clientWidth - parseInt(el.offsetWidth + '');
                let maxY = document.body.clientHeight - parseInt(el.offsetHeight + '');
                if (x < 0) {
                    x = 0
                } else if (x > maxX) {
                    x = maxX
                }
                if (y < 0) {
                    y = 0
                } else if (y > maxY) {
                    y = maxY
                }

                el.style.left = x + 'px'
                el.style.top = y + 'px'
            }

            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null
            }
        }
    }
}

export default dragDom;
