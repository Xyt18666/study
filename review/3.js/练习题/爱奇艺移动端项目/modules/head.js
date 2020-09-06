//使用类 生成 模块 ，根据数据生成dom ，并赋予模块 相应的 事件，由于没有模块化css插件，所以暂时使用全局css
//没有使用 组件化的 ui库 是因为 ，需要配置更多的 vue 脚手架 配置文件... 比较复杂不太理解，以后再说
// 写 爱奇艺 移动端 ，他的数据 全部以回调函数的方式获取

import * as pub from "./public.js"; //引入全局方法

//假装有数据
const navDate = {
  list: [
    "精选",
    "vip会员",
    "热点",
    "电视剧",
    "电影",
    "儿童",
    "综艺",
    "动漫",
    "直播",
    "资讯",
    "爱奇艺号",
    "娱乐",
    "原创",
    "搞笑",
    "影讯",
    "健康",
    "生活",
    "母婴",
    "脱口秀",
    "军事",
    "片花",
    "旅游",
    "时尚",
    "知识",
  ],
  searchPlaceholder: "中国新说唱2020",
};

export default class Head {
  constructor() {}
  init() {
    this.creatHtml();
  }
  creatHtml() {
    let li = ``;
    navDate.list.forEach((item, index) => {
      li += `<li>${item}</li>`;
    });

    console.log();
    pub.getEle("body").innerHTML = ` <header>
      <div class="hT">
        <div class="logo"></div>
        <form action="#">
          <input type="text" placeholder=${navDate.searchPlaceholder} />
          <div class="search"></div>
        </form>
        <div class="user"></div>
        <div class="dangload"></div>
      </div>
      <div class="searchPanel">searchPanel</div>
      <div class="hB">
        <nav>
          <div class="navL">
            <ul class="list">
              ${li}
            </ul>
            <div class="progre"></div>
          </div>
        </nav>
        <div class="navR"></div>
      </div>
    </header>`;
  }
}
