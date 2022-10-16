/*
 * @Author: yunying61
 * @创建时间: 2022-03-31-17:10:23
 * @最后修改者: yunying61
 * @最后编辑时间: 2022-10-16-17:09:25
 * @文件相对于项目的路径: \blog_hexo_next\source\js\date_to_now.js
 * @消息: 简要的描述
 * 星幕·云影
 */
(function() {
  var times = document.getElementsByTagName('time');
  if (times.length === 0) { return; }
  var posts = document.getElementsByClassName('post-body');
  if (posts.length === 0) { return; }

  var updateTime = new Date(times[1].dateTime).getTime();  /* 文章发布时间戳 */
  var nowTime = Date.now()  /* 当前时间戳 */
  var interval = parseInt(nowTime - updateTime)
  /* 发布时间超过指定时间（毫秒）（30天） */
  if (interval > 30*24*60*60*1000){
    var days = parseInt(interval / 86400000)
    posts[0].innerHTML = '<div class="note warning"><p>' +
      '<h4>文章时效性提示</h4><p>这是一篇更新于 ' + days + ' 天前的文章，部分信息可能已失效，请注意甄别。' +
      '</p></p></div>' + posts[0].innerHTML;
  }
})();