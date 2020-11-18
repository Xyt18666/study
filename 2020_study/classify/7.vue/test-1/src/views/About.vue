<template lang="pug">
.about about
    p p
</template>
<script>
export default {
    created() {
        console.log(" cerated");
        this.$on("hook:mounted", function() {
            console.log("通过hook触发 mounted");
        });
    },
    mounted() {},
};
</script>
