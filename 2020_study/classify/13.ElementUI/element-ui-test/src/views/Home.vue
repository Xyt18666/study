<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Containeer />
        <Icon />
        <Buttons />
        <Audios />
        <Checkboxs />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/1.Layout布局.vue";
import Containeer from "@/components/2.Container布局容器.vue";
import Icon from "@/components/3.色彩、字体、边框、icon图、文字链接.vue";
import Buttons from "@/components/4.按钮.vue";
import Audios from "@/components/5.单选框.vue";
import Checkboxs from "@/components/6.复选.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
        Containeer,
        Icon,
        Buttons,
        Audios,
        Checkboxs,
    },
};
</script>
