<template lang="pug">
.about about
    //-  router-link( to="/about" @click.native="active=1" :class="[active==1?'active':'']") 1
    //- router-view 
      <div class="block">
    
    el-carousel(height="150px")
      el-carousel-item(v-for="item in 4" :key="item")
        h3(class="small") {{ item }}
 
</template>
<script>
// import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
    computed: {
        // ...mapState([]),
        // ...mapGetters([]),
    },

    methods: {
        // ...mapMutations([]),
        // ...mapActions([]),
        // toXx() {
            // this.$router.push({
            //     name:"",
            //     params:{
            //     }
            // })
        // },
    },
    mounted() {
        // this.$route.params
        // this.$route.query
    },
};
</script>
<style lang="sass">
// .v-enter,.v-leave-to

// .v-enter-active,.v-leave-active

.el-carousel__item h3
    color: #475669
    font-size: 14px
    opacity: 0.75
    line-height: 150px
    margin: 0

.el-carousel__item:nth-child(2n) 
    background-color: #99a9bf


.el-carousel__item:nth-child(2n+1) 
    background-color: #d3dce6
  
</style>
