<template>
    <div class="home">
        <!-- <Login /> -->
        <LoginTow />
        <TestI18n />
    </div>
</template>

<script>
// @ is an alias to /src
// import Login from "@/components/Login.vue";
import LoginTow from "@/components/LoginTow.vue";
import TestI18n from "@/components/TestI18n.vue";

export default {
    name: "Home",
    components: {
        // Login,
        LoginTow,
        TestI18n,
    },
};
</script>
