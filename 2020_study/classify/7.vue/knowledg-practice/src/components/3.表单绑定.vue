<template lang="pug">
  .hello 
    input(
        v-model="val"
    )
    p {{val}}

    input(
         type="checkbox" id="checkbox" v-model="checked"
    )
    p {{checked}}


    input(
         type="checkbox" id="jack" value="Jack" v-model="checkedNames"
    )
    input(
         type="checkbox" id="john" value="John" v-model="checkedNames" 
    )
    p {{checkedNames}}

     
     
   
</template>

<script>
export default {
    data() {
        return {
            val: 111,
            checked: true,
            checkedNames: [],
        };
    },
    name: "HelloWorld",
    props: {},
};
</script>

<style scoped lang="sass"></style>
