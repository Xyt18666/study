<template lang="pug">
.singer-container.lm-fixed-container(:style="{ 'bottom': gap }")
    .singer-list-container
        scroll-view(
            ref="scrollView",
            :scroll-data="singerList",
            :probe-type="3",
            @scroll="onScroll"
        )
            data-loading(v-if="loading")
            ul
                li.list-group(
                    ref="listGroup",
                    v-for="group in singerList",
                    :key="group.letter"
                )
                    h2.title {{ group.letter }}
                    ul
                        li.list-item(
                            v-for="(d, i) in group.items",
                            :key="i",
                            @click="viewSinger(d)"
                        )
                            .avatar(v-lazy:background-image="d.avatar")
                                .copyright(v-if="d.copyright")
                            .name.lm-ellipsis {{ d.name }}

        .fixed-title.title(
            ref="fixedTitle",
            v-show="fixedTitle"
        ) {{ fixedTitle }}

        .shortcut(
            @touchstart.stop.prevent="onShortcutTouchStart",
            @touchmove.stop.prevent="onShortcutTouchMove",
            @touchend.stop.prevent
        )
            ul
                li(
                    v-for="(d, i) in singerList",
                    :key="i",
                    :class="{ current: currentIndex === i }",
                    :data-index="i"
                ) {{ d.letter }}

    transition(name="slide")
        router-view
</template>

<script>
import gapMixin from '@/assets/mixin/gap.js';

const TITLE_HEIGHT = 30;
const SHORTCUT_ITEM_HEIGHT = 17;

export default {
    mixins: [gapMixin],
    data() {
        return {
            loading: true,
            singerList: [],
            scrollY: 0,
            currentIndex: 0,
            heightList: [],
            diff: 0,
            touch: {
                y0: 0,
                index: 0
            }
        }
    },
    computed: {
        fixedTitle() {
            const { singerList, scrollY, currentIndex } = this;
            if (scrollY > 0 || !singerList.length) return '';
            return singerList[currentIndex] ? singerList[currentIndex].letter : '';
        }
    },
    mounted() {
        this.getSingerList().then(() => {
            this.$nextTick(() => {
                this.calculateHeight();
            });
        });
    },
    watch: {
        scrollY(y) {
            const { heightList } = this;
            // 当滚动到顶部，y>0
            if (y > 0) {
                this.currentIndex = 0;
                return;
            }
            // 在中间部分滚动
            for (let i = 0; i < heightList.length - 1; i++) {
                const height1 = heightList[i];
                const height2 = heightList[i + 1];
                if (-y >= height1 && -y < height2) {
                    this.currentIndex = i;
                    this.diff = height2 + y;
                    return;
                }
            }
            // 当滚动到底部，且-y大于最后一个元素的上限
            this.currentIndex = heightList.length - 2;
        },
        diff(val) {
            const fixedTop = (val > 0 && val < TITLE_HEIGHT) ? val - TITLE_HEIGHT : 0;
            if (this.fixedTop === fixedTop) return;
            this.fixedTop = fixedTop;
            this.$refs.fixedTitle.style.transform = `translate3d(0, ${fixedTop}px, 0)`;
        }
    },
    methods: {
        getSingerList() {
            return this.$http.get('singer-list').then(res => {
                this.singerList = this.sortSingerList(res.data || []);
                this.loading = false;
            });
        },
        sortSingerList(list) {
            let singerObj = {};
            list.forEach((item, index) => {
                const letter = item.firstLetter;
                if (!singerObj[letter]) {
                    singerObj[letter] = {
                        letter,
                        items: []
                    }
                }
                singerObj[letter].items.push(item);
            });

            let singerArr = [];
            for (let key in singerObj) {
                singerArr.push(singerObj[key]);
            }

            singerArr.sort((a, b) => {
                return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
            })

            return singerArr;
        },
        viewSinger({ copyright, id }) {
            if (!copyright) {
                return this.toast('Sorry, 暂无此歌手版权');
            }
            this.$router.push(`/singer/${id}`);
        },
        calculateHeight() {
            this.heightList = [];
            const list = this.$refs.listGroup;
            let height = 0;
            this.heightList.push(height);
            for (let i = 0; i < list.length; i++) {
                height += list[i].clientHeight;
                this.heightList.push(height);
            }
        },
        onScroll({ y }) {
            this.scrollY = y;
        },
        scrollTo(index) {
            this.$refs.scrollView.scrollToElement(this.$refs.listGroup[index], 0);
        },
        onShortcutTouchStart(e) {
            const firstTouch = e.touches[0];
            this.touch.y0 = firstTouch.pageY;
            const index = e.target.getAttribute('data-index');
            this.touch.index = index;
            this.scrollTo(index);
        },
        onShortcutTouchMove(e) {
            const firstTouch = e.touches[0];
            const delta = Math.ceil((firstTouch.pageY - this.touch.y0) / SHORTCUT_ITEM_HEIGHT);
            const index = parseInt(this.touch.index) + delta
            this.scrollTo(index);
        },
        refreshScrollView() {
            this.$refs.scrollView.refresh();
        }
    }
};
</script>

<style lang="sass" scoped>
.singer-container
    top: 100px
    .singer-list-container
        position: relative
        height: 100%
        overflow: hidden
    .list-group
        ul
            padding: 20px
        .list-item
            display: flex
            align-items: center
            height: 65px
            .avatar
                position: relative
                flex: 0 0 50px
                height: 50px
                border: 1px solid #5a485f
                border-radius: 50%
                background-repeat: no-repeat
                background-position: center
                background-size: cover
                .copyright
                    position: absolute
                    right: -2px
                    bottom: -2px
                    width: 12px
                    height: 12px
                    border: 2px solid #000
                    border-radius: 50%
                    background: #ff623e
                    background: linear-gradient(15deg, #ff623e, #ff947b)
            .name
                flex-grow: 1
                padding-left: 15px
                font-size: 14px

    .shortcut
        position: absolute
        z-index: 30
        right: 0
        top: 50%
        transform: translateY(-50%)
        li
            display: block
            padding: 2px 10px 2px 2px
            line-height: 1em
            text-align: center
            font-family: Arial
            font-size: 13px
            opacity: .4
            &.current
                opacity: 1

    .fixed-title
        position: absolute
        top: 0
        left: 0
        width: 100%

    .title
        line-height: 30px
        padding-left: 20px
        background-color: #061842
        background: linear-gradient(15deg, #061842, #2c50a1)
        font-size: 16px
        font-weight: bold

.slide-enter-active, .slide-leave-active
    transition: all .3s ease-in-out

.slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
