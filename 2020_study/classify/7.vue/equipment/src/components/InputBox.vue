<template lang="pug">
.input-box-container
    img(src="../assets/img/icon-search-line.png")
    input(
        ref="query",
        v-model="query",
        :placeholder="placeholder"
    )
    .clear(
        v-show="query",
        @click="onClear"
    )
</template>

<script>
export default {
    data() {
        return {
            query: ''
        };
    },
    props: ['placeholder'],
    methods: {
        onClear() {
            this.query = '';
        },
        setQuery(val) {
            this.query = val;
        },
        blur() {
            this.$refs.query.blur();
        }
    },
    watch: {
        query(val) {
            this.$emit('query', val);
        }
    }
}
</script>

<style lang="sass" scoped>
.input-box-container
    position: relative
    height: 40px
    background: rgba(0, 0, 0, .6)
    border-radius: 5px
    input
        width: 100%
        height: 100%
        padding: 0 40px
        background: transparent
        color: #fff
        font-size: 14px
    img
        position: absolute
        left: 8px
        top: 10px
        width: 20px
        height: auto
        opacity: .4
    .clear
        position: absolute
        top: 5px
        right: 5px
        width: 30px
        height: 30px
        background: url(~@/assets/img/icon-clear.png) no-repeat center
        background-size: 20px
        opacity: .4

</style>
