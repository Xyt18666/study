<template lang="pug">
.register-detail-wrapper
    h1.title 设备登记详情
    h2 设备名称：{{ detail.name }}
</template>

<script>
import RegisterMixin from '@/mixins/register.js';
export default {
    mixins: [ RegisterMixin ],
    data() {
        return {
            detail: {}
            // this.$route.query
        }
    },
    methods: {
        setData(val) {
            this.detail = val;
        }
    }
};
</script>
