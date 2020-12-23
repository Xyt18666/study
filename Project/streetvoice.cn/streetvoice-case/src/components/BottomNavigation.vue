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
    navList() {
      return [
        {
          text: this.$t("navList.0"),
          to: "/",
          icon: "wap-home",
          isActive: 0,
        },
        {
          text: this.$t("navList.1"),
          to: "/hot",
          icon: "fire",
          isActive: 1,
        },
        {
          text: this.$t("navList.2"),
          to: "/album",
          icon: "audio",
          isActive: 2,
        },
        {
          text: this.$t("navList.3"),
          to: "/search",
          icon: "comment",
          isActive: 3,
        },
        {
          text: this.$t("navList.4"),
          to: "/my",
          icon: "manager",
          isActive: 4,
        },
      ];
    },
  },
  data() {
    return {
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
  watch: {
    navList: {
      handler(newa) {
        this.setSectionName(newa[this.isActive].text);
      },
      immediate: true,
      deep: true,
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
  background: #fff;
}
</style>
