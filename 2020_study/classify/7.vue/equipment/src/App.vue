<template>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("测试请求接口在app.js");
    // axios.get("https://www.xueyiteng.com/getmysqli.php").then(d => {
    //   console.log(d);
    // });
  }
};
</script>
