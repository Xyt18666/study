<template lang="pug">
.item
    p time {{data.time}}
    p name {{data.name}}
    p size {{data.size}}
    
  
</template>

<script>
export default {
    props: ["data"],
   
    
};
</script>

<style></style>
