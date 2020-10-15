<template lang="pug">
ul.song-list-container
    li(
        v-for="(d, i) in list",
        :key="i",
        :style="{ 'padding-right': copyright && d.url ? '50px' : '0' }",
        @click="selectItem(d, i)"
    )
        .song.lm-ellipsis {{ d.song }}
        .album.lm-ellipsis {{ d.singer }} - {{ d.album }}
        .copyright(v-if="copyright && d.url") 有版权
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        },
        copyright: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selectItem(data, index) {
            this.$emit('click', data, index);
        }
    }
};
</script>

<style lang="sass">
ul.song-list-container
    padding: 20px
    li
        position: relative
        & + li
            margin-top: 15px
        .song
            font-size: 14px
        .album
            font-size: 12px
            opacity: .4
    .copyright
        position: absolute
        right: -5px
        top: 50%
        line-height: 1em
        margin-top: -10px
        padding: 3px 6px
        border: 1px solid #000
        border-radius: 9px
        background: #ff623e
        background: linear-gradient(15deg, #ff623e, #ff947b)
        font-size: 12px
        transform: scale(.8)
</style>
