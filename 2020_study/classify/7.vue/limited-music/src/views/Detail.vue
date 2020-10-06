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
      id: this.$route.params.id,
      type: this.$route.query.type,
    };
  },
  watch: {
    $route() {
      const { params, query } = this.$route;
      this.id = params.id;
      this.type = query.type;
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="sass">
</style>