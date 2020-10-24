<template lang="pug">
transition(
    name="toggle"
)
  .gwcs(
      v-show="isShow"
  )
    p(@click="$emit('back')") 返回

    ul
        li(
            v-for="item,index in stort"
        )
            img(:src='item.pic')
            p {{item.text}}
            p 数量 {{item.count}}  ---- {{item.price}} 单价
            p(@click="setItem(1,item)") ++
            p(@click="setItem(-1,item)") --
            p(@click="remove(item.id)") 删除
    
    p ---------------------------------
        
    .gwcs
        p 总数{{num}} -- 总价{{moy}}
 
        
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    props: ["isShow"],
    computed: {
        ...mapState(["stort"]),
        num() {
            let nums = 0;
            this.stort.map(item => {
                nums += item.count;
            });
            return nums;
        },
        moy() {
            let moys = 0;
            this.stort.map(item => {
                moys += item.count * item.price;
            });
            return moys;
        },
    },
    methods: {
        ...mapMutations(["pushStortItem", "clearStortItem", "removeItem"]),
        setItem(size, item) {
            if (size > 0) {
                this.pushStortItem(item);
            } else {
                this.clearStortItem(item);
            }
        },
        remove(item) {
            this.removeItem(item);
        },
    },
};
</script>

<style lang="sass">
@keyframes togg
    0%
        top: 100%
    100%
        top: 0

.gwcs
    position: fixed
    width: 100%
    height: 100%


    background: pink

.toggle-enter-active
    animation: togg 0.5s linear

.toggle-leave-active
    animation: togg 0.5s linear reverse
</style>
