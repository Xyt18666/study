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
         
     
   
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            isData: false,
            inputValue: "",
            data: null,
        };
    },
    methods: {
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
                        // 海阔天空;
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
    components: {},
    watch: {},
    created() {},
    mounted() {},
};
</script>
<style lang="sass" scoped></style>
