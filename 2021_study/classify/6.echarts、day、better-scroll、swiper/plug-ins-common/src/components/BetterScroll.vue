<template>
    <div class="bs">
        <h1>betterscroll</h1>
        <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li>1</li>
                <li>1</li>

                <li>1</li>

                <li>1</li>
                <li>1</li>
                <li>1</li>

                <li>1</li>

                <li>1</li>
                <li>1</li>
                <li>1</li>

                <li>1</li>

                <li>1</li>
                <li>1</li>
                <li>1</li>

                <li>1</li>

                <li>1</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scroll: "",
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new this.$BScroll(this.$refs.wrapper, {
                scrollY: true,
                click: true,
            });
        });
    },
};
</script>

<style>
.wrapper {
    height: 150px;
    overflow: hidden;
}
</style>
