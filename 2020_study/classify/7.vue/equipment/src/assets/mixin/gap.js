import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['playlist']),
        gap() {
            return this.playlist.length ? '60px' : '0';
        }
    },
    watch: {
        gap() {
            this.refreshScrollView();
        }
    },
    methods: {
        refreshScrollView() {
            throw new Error('请刷新滚动区域');
        }
    }
};
