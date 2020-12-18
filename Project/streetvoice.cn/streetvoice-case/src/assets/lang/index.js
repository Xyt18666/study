// 在vue中使用i18n并生成他的实例,实例中根据语言地区的不同,去配置不同的地区信息
import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ch", // 设置地区
  messages: {
    en: require("./en"),
    ch: require("./ch"),
  }, // 设置地区信息
});
export default i18n;
