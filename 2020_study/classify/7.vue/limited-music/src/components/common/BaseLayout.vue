<template lang="pug">
    .base-layout
        header 
            slot(name="header")
        main 
            slot
        footer 
            slot(name="footer") 789
            p 456
         
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
