<template lang="pug">
.search
    el-input(
          placeholder="搜索歌曲" 
          v-model="inputValue"
          @input="getMsg"
          ref="input"
          clearable
          prefix-icon="el-icon-search"
          )
    ul
        li(
            v-for="item in data"
            :key="item.id"
          )
            h4 {{item.song}}
            p {{item.singer}} - {{item.album}}
    
    .hot-search(v-show="isMsg")
        h3 热门搜索
        ol
            li(
                v-for="item,index in hotSearch"
                :key="index"
                :ref="'hot'+index"
                @click="toInput('hot'+index)"
            ) {{item}}

    
</template>

<script>
export default {
    data() {
        return {
            inputValue: "",
            data: null,
            hotSearch: null,
            isMsg: true,
            timeoutId: null,
        };
    },
    created() {
        this.$http.post("hot-search").then(
            d => {
                this.hotSearch = d.data;
                // console.log(d.data);
            },
            e => {
                console.log(e, "错误");
            }
        );
    },
    methods: {
        getMsg() {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
            this.timeoutId = setTimeout(() => {
                if (this.$refs.input.value == "") {
                    return;
                }
                {
                    this.$http
                        .post("song-search", {
                            keyword: this.inputValue,
                        })
                        .then(
                            d => {
                                if (d.data !== undefined && d.data !== null && d.data.length > 0) {
                                    this.data = d.data;
                                    this.isMsg = false;
                                } else {
                                    this.isMsg = true;
                                    this.data = null;
                                }
                            },
                            e => {
                                console.log(e, "错误");
                            }
                        );
                }
            }, 500);
        },
        toInput(name) {
            this.inputValue = this.$refs[name][0].innerHTML;
            this.getMsg();
        },
    },
};
</script>

<style lang="sass">


.search
    .el-input
        width: 3.35rem
        margin: 0 auto
        display: block
        margin-top: 0.2rem

        .el-input__inner
            width: 3.35rem
            background: #000
            opacity: 0.6
            color: #fff
            outline: none
            border: none
            font-size: 0.14rem
    ul
        li
            padding-left: 0.2rem
            margin-top: 0.13rem
            h4
                color: #fff
                height: 0.2rem
                font-size: 0.14rem
                font-weight: normal
            p
                height: 0.17rem
                color: #fff
                opacity: 0.4
                font-size: 0.12rem
    .hot-search
        h3
            margin-top: 0.14rem
            margin-left: 0.2rem
            margin-bottom: 0.14rem
            font-size: 0.16rem
            opacity: 0.8
            color: #fff
            font-weight: normal
        ol
            padding: 0  0.2rem
            display: flex
            li
                font-size: 0.12rem
                line-height: 0.27rem
                background: #333
                opacity: 0.6
                text-align: center
                color: #fff
                border-radius: 0.03rem
                margin-right: 0.17rem
                padding: 0  0.05rem
</style>
