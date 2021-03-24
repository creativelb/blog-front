/**
 * 带动画滚动 比如要滚动到 500px 300ms  那么 ScrollTop(500,0)
 * @param {滚动位置} number 
 * @param {滚动时间} time 
 * @returns 
 */
export const ScrollTop = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number;
    return number;
  }
  const spacingTime = 5; // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime; // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
  let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
  let scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--;
      ScrollTop(nowTop += everTop);
    } else {
      clearInterval(scrollTimer); // 清除计时器
    }
  }, spacingTime);
};
/**
 * 获取滚动高度的兼容性写法
 * @returns 返回滚动高度
 */
export function getScrollTop() {
  var scroll_top = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
      scroll_top = document.documentElement.scrollTop;
  }
  else if (document.body) {
      scroll_top = document.body.scrollTop;
  }
  return scroll_top;
}
