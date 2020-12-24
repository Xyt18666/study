<template>
  <div class="top_bar">
    <p>{{ sectionName }}</p>
    <div class="lang">
      <p @click="checkLang" v-if="langIsShow == 'ch'">简</p>
      <p @click="checkLang" v-if="langIsShow == 'en'">繁</p>
    </div>
    <div
      :style="{ 'background-image': `url(${userAvatarImgUrl})` }"
      class="user_avatar"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      langIsShow: "ch",
    };
  },
  computed: {
    ...mapState(["sectionName", "userAvatarImgUrl"]),
  },
  methods: {
    checkLang() {
      if (this.langIsShow == "ch") {
        this.$i18n.locale = "en";
        this.langIsShow = "en";
      } else {
        this.$i18n.locale = "ch";
        this.langIsShow = "ch";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top_bar {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  box-sizing: border-box;
  background: #fff;
  p {
    font: bold 26px/50px "";
    margin: 0;
  }
  .lang {
    display: flex;
    margin-left: auto;
    margin-right: 20px;
    p {
      font: bold 16px/50px "";
    }
  }
  .user_avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-size: cover;
    box-shadow: 0 0 15px -5px rgb(245, 85, 46) inset;
  }
}
</style>
