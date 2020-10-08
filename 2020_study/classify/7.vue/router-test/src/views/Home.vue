<template lang="pug">
    .homes
        el-input(
          placeholder="请输入内容" 
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
            @click="toXq(item)"
          ) {{item.song}}
        .hot
          h2 热门
          p(
            @click="toInput"
            ref="px"
          ) 海阔天空
        
        transition
            .tran(
                v-show="isShow"
            ) tran

        .butt(
            @click="isShow=!isShow"
        ) 切换
        .boxs(
            @click="isShow=!isShow"
        ) 弹框
       
        cf-box(
            :isS="isShow"
        )
        p ----------------------------------------------------

        transition( 
            enter-active-class="animate__fadeIn "
            leave-active-class="animate__fadeOut"
            )
            div(v-show="show" class="animate__animated ") transition
        
        button(@click="show=!show") 切换

        div(class="animate__animated animate__bounce animate__repeat-2") Example

      

        transition( 
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp"
        )
            h1(v-show="show") Animate.css

        transition-group(
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutRight"
        )
            h1(v-show="show" class="animate__animated" :key="1") Animate.css
            h2(v-show="show" class="animate__animated" :key="2") Just-add-water CSS animations


         
     
   
</template>

<script>
import CfBox from "@/components/confirmBox.vue";
export default {
    name: "Home",
    data() {
        return {
            isData: false,
            inputValue: "",
            data: null,
            isShow: false,
            show: true,
        };
    },
    methods: {
        toBox() {
            console.log(1);
        },
        toXq(item) {
            this.$router.push({
                name: "Songxq",
                params: item,
            });
        },
        getMsg() {
            this.$http
                .post("/api/song-search", {
                    keyword: this.inputValue,
                })
                .then(
                    d => {
                        if (
                            d.data.data !== undefined &&
                            d.data.data !== null &&
                            d.data.data.length > 0
                        ) {
                            this.data = d.data.data;
                            console.log(this.data);
                        } else {
                            this.data = null;
                        }
                        console.log(d);
                    },
                    e => {
                        console.log(e, "错误");
                    }
                );
        },
        toInput() {
            this.inputValue = this.$refs.px.innerHTML;
            this.getMsg();
        },
    },
    components: {
        CfBox,
    },
    watch: {},
    created() {},
    mounted() {},
};
</script>
<style lang="sass" scoped>
// .v-enter,.v-leave-to
//     opacity: 0
// .v-enter-active,.v-leave-active
//     transition: opacity 5s


.boxs
    position: absolute
    z-index: 999
</style>
