<template>
    <div class="contetn">
        <h3>33</h3>
        <h4>{{ id }}</h4>
    </div>
</template>

<script>
// <template functional>
//     <div class="contetn">
//         <h3>33</h3>
//         <!-- <h4>{{ id }}</h4> -->
//     </div>
// </template>

export default {
    props: ["id"],
    mounted() {
        console.log(this.props);
    },
};
</script>

<style></style>
