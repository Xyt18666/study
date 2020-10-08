<template lang="pug">
  .singerList(
      v-loading="loading"
  )
    ul
        li(
            v-for="item,index in list"
            :key="index"
            
        )
            p {{item.letter}}
            ol
                li(
                    v-for="singer,index2 in item.items"
                    :key="index2"
                    
                ) {{singer.name}}
                    img(
                        :src="singer.avatar"
                    )

</template>

<script>
export default {
    data() {
        return {
            list: null,
            loading: true,
        };
    },

    methods: {
        getData() {
            this.$http.get("/api/singer-list").then(
                d => {
                    // console.log(d.data.data);

                    let obj = {};
                    // 创建一个 新对象

                    d.data.data.map(item => {
                        const letter = item.firstLetter;
                        if (!obj[letter]) {
                            // 判断对象中是否有 该字母 ，如果没有
                            obj[letter] = {
                                // 对象添加 该字母以及 items数组
                                letter,
                                items: [],
                            };
                        }

                        obj[letter].items.push(item);
                        //   有的话 在对应的 字母下的数组中添加item
                    });

                    let arr = [];
                    for (let key in obj) {
                        arr.push(obj[key]);
                        //   遍历对象 放入新数组
                    }

                    arr.sort((a, b) => a.letter.charCodeAt(0) - b.letter.charCodeAt(0));
                    // 数组排序
                    this.list = arr;
                    console.log(this.list);
                },
                e => {
                    console.log(e, "错误");
                }
            ).finally(()=>{
                this.loading=false
            })
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style lang="sass"></style>
