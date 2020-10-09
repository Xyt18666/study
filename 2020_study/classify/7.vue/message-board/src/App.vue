<template lang="pug">
#app 
  header 
    header-content(
      @setmasg="setmasgfn",
      @reset="datalist.splice(0, datalist.length)",
      @search="searchfn"
    )
  main 
    main-content(
      :datalist="datalist",
      @removeitem="removeitemfn",
      @likeitem="likeitemfn",
      v-show="!islike"
    )
    main-content(
      :datalist="likelist",
      @removeitem="removeitemfn",
      @likeitem="likeitemfn",
      :likelist="likelist",
      v-show="islike"
    )
  PromptBox(v-if="tip", @yes="yesfn", @no="tip = false")
  p ------------------------------------------------------
  p  vuex
  p {{$store.state.name}}  获取数据
  p {{lists}}   计算后 简化书写
  p  数组的第{{$store.state.index}} 个下标是 {{$store.getters.son}}

  input(v-model.number="index")
  button(@click="onClick") 获第 {{ index }} 个孩子

  p(
    @click="xgd"
  ) 一次修改多个
 
</template>
<script>
import "normalize.css/normalize.css";
import HeaderContent from "@/components/HeaderContent.vue";
import MainContent from "@/components/MainContent.vue";

import PromptBox from "@/components/comm/PromptBox.vue";

/*
  1、留言列表，每条数据包含发布时间和内容；
  2、每条留言右侧删除按钮可删除此条留言；
  3、页面右上角添加按钮，点击弹出添加弹框，可以添加留言（弹框实现困难的话，可以直接把添加表单写在页面里）；

  进阶功能，丰俭由人，有能力的逐条增加实现：
  1、删除时增加二次确认弹框；
  2、左上角增加全部清空按钮，点击可以清空所有留言；
  3、每条留言增加收藏切换功能，可以通过筛选按钮筛选出所有加的留言；
  4、单条数据的删除和加按钮通过触摸左滑打开；



*/

export default {
    computed: {
        lists() {
            return this.$store.state.name;
        },
    },

    data() {
        return {
            datalist: [],
            tip: false,
            isremoveid: null,
            likelist: [],
            islike: false,
            list: [
                {
                    title: "文章1",
                    id: "p1",
                },
                {
                    title: "文章2",
                    id: "p2",
                },
            ],
            index: 0,
        };
    },
    components: {
        HeaderContent,
        MainContent,
        PromptBox,
    },
    methods: {
        xgd() {
            this.$store.dispatch("setni", {
                index: 2,
                name: "鹿丸",
            });
        },
        onClick() {
            this.$store.commit("setindex", this.index);
        },
        goDetail(id) {
            // 拼接路径传参
            // this.$router.push(`/detail/${id}?type=hot&time=today`);
            // 命名路由
            this.$router.push({
                name: "Detail",
                params: {
                    haha: id,
                },
                query: {
                    type: "hot",
                    time: "today",
                },
            });
        },
        toRou() {
            this.$router.push({
                name: "Er2",
                params: {
                    siez: "11",
                },
                query: { ok: "no" },
            });
        },
        setmasgfn(d) {
            console.log(d);
            this.datalist.push(d);
        },
        removeitemfn(d) {
            this.tip = true;
            this.isremoveid = d;
        },
        likeitemfn(d) {
            if (!d.lick) {
                d.lick = true;
                this.likelist.push(d);
                console.log(this.likelist);
            } else {
                d.lick = false;
                this.likelist.some((item, index) => {
                    if (item.time == d.time) {
                        this.likelist.splice(index, 1);
                    }
                });
            }
        },
        yesfn() {
            this.datalist.some((item, index) => {
                if (this.isremoveid == item.time) {
                    this.datalist.splice(index, 1);
                }
            });
            this.isremoveid = null;
            this.tip = false;
        },
        searchfn() {
            this.islike = !this.islike;
        },
    },
};
</script>
<style scoped lang="sass">
main
  width: 100vw
</style>
