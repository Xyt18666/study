<template lang="pug">
.detail
  p 文章详情页
  p 文章ID是 {{ id }}
  p 文章分类是 {{ type }}
</template>

<script>
export default {
  data() {
    return {
      // $route是当前页面的匹配路由
      // $router是整个应用的路由实例
      id: this.$route.params.haha,
      type: this.$route.query.type,
    };
  },
  watch: {
    $route() {
      const { params, query } = this.$route;
      this.id = params.haha;
      this.type = query.type;
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style lang="sass">
.detail
    padding: 30px
    border: 2px solid #fff
</style>