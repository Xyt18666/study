<template>
  <div class="bottom_navigation">
    <grid :column-num="5" :border="false">
      <grid-item
        v-for="(d, i) in navList"
        :key="i"
        :icon="d.icon"
        :text="d.text"
        :to="d.to"
        @click="toSection(i)"
        :class="[d.isActive == isActive ? 'active' : '']"
      />
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from "vant";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Grid,
    GridItem,
  },
  computed: {
    ...mapState(["sectionName"]),
  },
  data() {
    return {
      navList: [
        {
          text: "发现",
          to: "/",
          icon: "wap-home",
          isActive: 0,
        },
        {
          text: "热门",
          to: "/hot",
          icon: "fire",
          isActive: 1,
        },
        {
          text: "专辑",
          to: "/album",
          icon: "audio",
          isActive: 2,
        },
        {
          text: "搜索",
          to: "/search",
          icon: "comment",
          isActive: 3,
        },
        {
          text: "我的",
          to: "/my",
          icon: "manager",
          isActive: 4,
        },
      ],
      isActive: 0,
    };
  },
  methods: {
    ...mapMutations(["setSectionName"]),
    toSection(i) {
      this.setSectionName(this.navList[i].text);
      this.isActive = i;
    },
  },
};
</script>

<style lang="scss">
.bottom_navigation .active {
  i,
  span {
    color: rgb(245, 85, 46);
  }
}
</style>
<style lang="scss" scoped>
.bottom_navigation {
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
</style>
