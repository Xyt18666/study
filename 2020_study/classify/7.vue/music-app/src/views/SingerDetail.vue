<template lang="pug">
.singer-detail
    .top-box(
        :style="{'background-image':`url(${data.avatar})`}"
        ref="content"
    )
        .content
            .top
                .back 
                .title {{data.name}}
            .bottom 随机播放有版权的歌曲
    scroll-box(
        ref="scrollBox"
        @getScrollSize="scrollSize"
        )
        ul(
            ref="scrollUl"
        )
            li(
                v-for="item in data.songList"
                :key="item.id"
            )
                h4 {{item.song}}
                p {{item.singer}} - {{item.album}}



</template>

<script>
export default {
    data() {
        return {
            data: "",
        };
    },
    methods: {
        scrollSize(y) {
            console.log(y);
            if (y > 0) {
                this.$refs.content.style.transform = `scale(${1 + y / 100})`;
            } else {
                if (y <= -200) {
                    this.$refs.scrollBox.$el.style.marginTop = `-200px`;
                } else {
                    this.$refs.scrollBox.$el.style.marginTop = `${y}px`;
                    // this.$refs.scrollUl.style.transform = `translateY(${0}px)`;
                }

                // console.log(this.$refs.scrollBox.$el);
            }
        },
    },
    created() {
        let id = this.$route.params;

        this.$http.post("singer-detail?id=" + id.singerId).then(
            d => {
                this.data = d.data;
                // console.log(this.data);
                this.$nextTick(() => {
                    this.$refs.scrollBox.refresh();
                });
            },
            e => {
                console.log(e, "错误");
            }
        );
    },
};
</script>

<style lang="sass" scoped>
.singer-detail
    position: fixed
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 999
    background: url("~@/assets/images/bg.png")

    .top-box
        height: 2.51rem
        background-repeat: no-repeat
        background-size: cover
        .content
            width: 100%
            height: 100%
            background: rgba(0,0,0,0.6)
            position: relative
            .title
                color: #fff
                font-size: 0.16rem
                line-height: 0.23rem
                text-align: center
                padding-top: 0.14rem
            .bottom
                color: #fff
                position: absolute
                bottom: 0.2rem
                width: 100%

                font-size: 0.14rem
                line-height: 0.22rem
                text-align: center
    ul
        background: url("~@/assets/images/bg.png")
        background-repeat: no-repeat
        background-size: cover
        li
            padding-left: 0.2rem
            padding-top: 0.13rem
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
</style>
