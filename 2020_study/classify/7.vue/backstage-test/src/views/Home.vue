<template>
    <div class="home">
        <!-- <Login /> -->
        <LoginTow />
    </div>
</template>

<script>
// @ is an alias to /src
// import Login from "@/components/Login.vue";
import LoginTow from "@/components/LoginTow.vue";

export default {
    name: "Home",
    components: {
        // Login,
        LoginTow,
    },
};
</script>
