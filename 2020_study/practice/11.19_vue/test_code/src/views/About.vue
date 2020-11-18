<template lang="pug">
.about about
    //-  router-link( to="/about" @click.native="active=1" :class="[active==1?'active':'']") 1
    //- router-view 
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
        // ...mapActions([])
    },
    methods: {
        toXx() {
            // this.$router.push({
            //     name:"",
            //     params:{
            //     }
            // })
        },
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
</style>
