<template lang="pug">
.content
    transition(
        name="a1"
    )
        p(
            v-show="show"
        ) 
            transition(
                name="a2"
            )
                span(
                    v-show="show"
                ) span

    transition(
        name="a3"
    )
        .a33(
            v-show="show"
        ) 

    h2(
        @click="show=!show"
    ) click



    p ----------------------------------------
    transition(
        enter-active-class="b1"
        leave-active-class="b2"
    ) 
        h3(
            v-show="show"
        ) h3333333333

    transition(
        enter-class="b3"
        leave-to-class="b3"
        enter-active-class="b4"
        leave-active-class="b4"
    ) 
        h4(
            v-show="show"
        ) h44444
            transition(
                    enter-class="b5"
                    leave-to-class="b5"
                    enter-active-class="b6"
                    leave-active-class="b6"
                )
                    span(
                        v-show="show"
                    ) span444

  
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style lang="sass" scoped>
.a1-enter,.a1-leave-to
    background: red
.a1-enter-active,.a1-leave-active
    transition: 5s


.a2-enter,.a2-leave-to
    color: #000
.a2-enter-active,.a2-leave-active
    transition: 5s


.a3-enter-active
    animation: bb 2s forwards
.a3-leave-active
    animation: bb 2s forwards reverse

.a33
    width: 200px
    height: 200px
    background: #0f0

.b1
    animation: bb 2s forwards
.b2
    animation: bb 2s forwards reverse

.b3
    background: red
.b4
    transition: 3s

.b5
    color: #000
.b6
    transition: 3s


@keyframes bb
    0%
        width: 50px
        height: 50px
    100%
        width: 200px
        height: 200px


p
    background: #0f0
    span
        color: pink

h4
    background: #0f0
h3
    width: 200px
    height: 200px
    background: #000
    span
        color: pink
</style>
