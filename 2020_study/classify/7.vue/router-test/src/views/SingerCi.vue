<template lang="pug">
  .ci
    p 词
</template>

<script>
export default {
    data() {
        return {
            list: null,
        };
    },

    methods: {
        getData() {
            this.$http.get("/api/lrc-detail",{
                 params:{
                     id:this.$route.params.ids
                }
            }).then(
                d => {
                    
                   let datas =  this.$CryptoJS.enc.Base64.parse(d.data.data).toString(this.$CryptoJS.enc.Utf8)
                 
                   console.log(datas);
                  
                },
                e => {
                    console.log(e, "错误");
                }
            );
        },
    },
    created() {
        this.getData();
    },
};
</script>
</script>

<style lang="sass"></style>
