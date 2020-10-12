<template lang="pug">
.content
    p {{setName}}
</template>

<script>
export default {
    data(){
        return{
            name:"小雅"
        }
    },
    computed: {
        setName(){
            return this.name+"set"
        }
    },
    watch: {
        name(o,n){
            console.log(o,n);
            
        }
    },
};
</script>

<style></style>
