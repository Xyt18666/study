<template lang="pug">
.list list
  ul
    //- li(v-for="d in list", :key="d.id")
    //-   router-link(:to="'/detail/' + d.id") {{ d.title }}
    li(v-for="d in list", :key="d.id", @click="goDetail(d.id)") {{ d.title }}
    router-view
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "aa", id: "001" },
        { title: "bb", id: "002" },
      ],
    };
  },

  methods: {
    goDetail(id) {
      // 拼接路径传参
      // this.$router.push(`/detail/${id}?type=hot&time=today`);
      // 命名路由
      console.log(this.$router);

      this.$router.push({
        name: "Detail",
        params: {
          id: id,
        },
        query: {
          type: "hot",
          time: "today",
        },
      });
    },
  },
};
</script>

<style>
</style>