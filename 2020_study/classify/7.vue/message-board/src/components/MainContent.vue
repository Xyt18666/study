<template lang="pug">
    .main-content
        ul
            li(
                is="masg-list-item"
                v-on="$listeners"
                v-for="(item,index) in datalist"
                :key="index"
                :masgitem="item"
                
            )
         
</template>

<script>
import MasgListItem from "@/components/MasgListItem.vue";
export default {
    props: ["datalist"],
    components: {
        MasgListItem,
    },
};
</script>

<style scoped lang="sass">
ul
    width: 100%
    margin: 0
    padding: 0
    list-style: none
</style>
