<template>
    <div class="animate">
        <p>animate</p>
        <transition
            enter-active-class="animate__backInLeft"
            leave-active-class="animate__backOutRight"
        >
            <div v-show="show" class="animate__animated">4984</div>
        </transition>
        <div class="c" @click="show = !show">开关</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        window.onscroll = e => {
            console.log(e,window.pageYOffset);
        };
    },
};
</script>

<style></style>
