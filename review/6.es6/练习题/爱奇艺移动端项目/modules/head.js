//使用类 生成 模块 ，根据数据生成dom ，并赋予模块 相应的 事件，由于没有模块化css插件，所以暂时使用全局css
//没有使用 组件化的 ui库 是因为 ，需要配置更多的 vue 脚手架 配置文件... 比较复杂不太理解，以后再说
// 写 爱奇艺 移动端 ，他的数据 全部以回调函数的方式获取

import * as pub from "./public.js"; //引入全局方法
import "./jq.js"; //引入jq

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
    this.search();
  }
  creatHtml() {
    let li = ``;
    navDate.list.forEach((item, index) => {
      li += `<li>${item}</li>`;
    });

    console.log();
    pub.getEle("body").innerHTML = ` <header class="clearfix">
      <div class="hT">
        <div class="logo"></div>
        <form action="#">
          <div class="search htFSDefault"></div>
          <input type="text" placeholder=${navDate.searchPlaceholder} />
          <div class="search resetA"></div>
        </form>
        <div class="user"></div>
        <div class="dangload"></div>
        <div class="searchBut">搜索</div>
      </div>
      <div class="searchPanel">
      <ul class="sPanUl"></ul>
      <div class="ifNullBox">
        <div class="SearchHistory">
          <h3>搜索历史 <i></i></h3>
          <ul class="clearfix">
          
          </ul>
        </div>
        <div class="SearchHot">
          <h3>热门搜索</h3>
          <ul class="clearfix">
          
          </ul>
        </div>
      </div>
      </div>
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
  search() {
    this.searchClick();
    this.inputChange();
    this.creatIsNullBox();
    this.searchButClick();
    this.removeSH();
    this.navTachMove();
  }
  navTachMove() {
    $(".navL .list")[0].ontouchstart = (e) => {
      let max = parseInt($(".navL").width() - $(".navL .list").width());

      let thisX = parseInt(
        $(".navL .list")
          .css("transform")
          .replace(/[^0-9\-,]/g, "")
          .split(",")[4]
      );

      let startX = parseInt(e.changedTouches[0].pageX);
      console.log(max, startX);

      $(".navL .list")[0].ontouchmove = (e) => {
        let moveX = parseInt(e.changedTouches[0].pageX);

        let leftNum = moveX - (startX - thisX);
        // 移动时距离最左侧的位置 - （按下时距离最左侧的位置 - 初始最左侧位置）
        console.log(leftNum);
        leftNum = leftNum >= 0 ? 0 : leftNum <= max ? max : leftNum;

        $(".navL .list").css({
          transform: `translate(${leftNum}px,0px)`,
        });
        console.log(Math.abs(max), Math.abs(leftNum));

        $(".progre").show();
        $(".progre").css({
          width: (Math.abs(leftNum) / Math.abs(max)) * 100 + "%",
        });
      };

      $(".navL .list")[0].ontouchend = (e) => {
        $(".navL .list")[0].ontouchmove = null;
        $(".progre").fadeOut(500);
      };
    };
  }
  searchClick() {
    pub.getEle(".hT input").onclick = () => {
      $(".dangload,.user,.hB").css({
        display: "none",
      });
      $(".searchBut,.htFSDefault").css({
        display: "block",
      });

      $(".resetA").addClass("reset");

      pub.setStyle(pub.getEle(".hT input"), {
        color: "#fff",
      });
      pub.getEle(".hT input").value = pub
        .getEle(".hT input")
        .getAttribute("placeholder");

      pub.setStyle(pub.getEle(".searchPanel"), {
        display: "block",
        width: "100%",
        height: "calc(100vh - 0.68rem)",
        background: "#fff",
      });
      pub.getEle(".hT input").oninput();
    };
  }
  inputChange() {
    let time = new Date().getTime();
    pub.getEle(".hT input").oninput = () => {
      async function searchList() {
        const searchData = await pub
          .PromiseAjax({
            type: "get",
            async: false,
            url: `https://suggest.video.iqiyi.com/?key=${
              pub.getEle(".hT input").value
            }&if=mobile&platform=31&ppuid=&callback=__jp${time}`,
            dataType: "jsonp",
            jsonpCallback: `__jp${time}`,
          })
          .then((res) => {
            let li = ``;
            res.data.forEach((item, index) => {
              li += `<li>${item.name}</li>`;
            });
            pub.getEle(".sPanUl").innerHTML = li;
            if (pub.getEle(".hT input").value == "") {
              pub.getEle(".sPanUl").innerHTML = "";
              pub.getEle(".searchBut").innerHTML = "取消";
              pub.setStyle(pub.getEle(".hT .reset"), {
                display: "none",
              });
              $(".ifNullBox").show();
              $(".resetA").hide();
            } else {
              pub.getEle(".searchBut").innerHTML = "搜索";
              pub.setStyle(pub.getEle(".hT .reset"), {
                display: "block",
              });
              $(".ifNullBox").hide();
            }
            this.hTResetCli();
          });
      }
      searchList.bind(this)();
    };
  }

  hTResetCli() {
    pub.getEle(".hT .reset").onclick = () => {
      pub.getEle(".hT input").value = "";
      pub.getEle(".sPanUl").innerHTML = "";
      $(".ifNullBox").show();
      $(".searchBut").text("取消");
      $(".resetA").hide();
    };
    this.creatSH();
  }
  creatIsNullBox() {
    async function creatHotList() {
      const hotSearch = await pub
        .PromiseAjax({
          type: "get",
          url: `https://search.video.iqiyi.com/m?if=hotQuery&p=15&is_qipu_platform=1`,
        })
        .then((res) => {
          let li = ``;
          for (let i = 0; i < 6; i++) {
            $(".SearchHot ul").append(`<li>${res.data[i].query}</li>`);
          }
        });
    }
    creatHotList.bind(this)();
    this.creatSH();
  }
  searchButClick() {
    $(".searchBut").click(() => {
      if ($(".searchBut").text() == "搜索") {
        //跳转搜索界面同时储存搜索信息
        let datas = JSON.parse(localStorage.getItem("searchHise")) || [];
        datas.push($(".hT input").val());
        localStorage.setItem("searchHise", JSON.stringify(datas));

        this.creatSH();
      } else if ($(".searchBut").text() == "取消") {
        $(".dangload,.user,.hB").show();
        $(".searchBut,.htFSDefault,.searchPanel").hide();
        $(".resetA").show();
        $(".resetA").removeClass("reset");
      }
    });
  }
  creatSH() {
    $(".SearchHistory ul").html("");
    let datas = JSON.parse(localStorage.getItem("searchHise")) || [];

    let newShArr = [...new Set(datas)].slice(0, 6);

    $(newShArr).each((index, item) => {
      $(".SearchHistory ul").append(`<li>${item}</li>`);
    });
  }
  removeSH() {
    $(".SearchHistory h3 i").click(() => {
      localStorage.clear();
    });
    $(".SearchHistory ul").html("");
  }
}
