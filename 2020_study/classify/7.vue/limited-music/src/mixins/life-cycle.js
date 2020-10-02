export default {
    data() {
        return {
            n: 0,
        };
    },
    methods: {
        groupa(val) {
            console.log(val);
            console.log(this.$options);
            console.log(this.$data);

            console.log(this.$options.name);
            console.log(this.name);
            console.log(this.size);
        },
    },
    beforeCreate: function() {
        console.group("------beforeCreate创建前状态------");
    },
    created: function() {
        this.groupa("------created创建完毕状态------");
    },
    beforeMount: function() {
        this.groupa("------beforeMount挂载前状态------");
    },
    mounted: function() {
        this.groupa("------mounted 挂载结束状态------");
    },
    beforeUpdate: function() {
        this.groupa("beforeUpdate 更新前状态===============》");
    },
    updated: function() {
        this.groupa("updated 更新完成状态===============》");
    },
    beforeDestroy: function() {
        this.groupa("beforeDestroy 销毁前状态===============》");
    },
    destroyed: function() {
        this.groupa("destroyed 销毁完成状态===============》");
    },
};
