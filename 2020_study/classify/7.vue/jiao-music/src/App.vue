<template lang="pug">
#app(@touchmove.prevent)
    header-bar
    tab-card
    keep-alive
        router-view
    music-player
</template>

<script>
import HeaderBar from '@/components/page/HeaderBar.vue';
import TabCard from '@/components/page/TabCard';
import MusicPlayer from '@/components/page/MusicPlayer';

export default {
    components: { HeaderBar, TabCard, MusicPlayer }
};
</script>
