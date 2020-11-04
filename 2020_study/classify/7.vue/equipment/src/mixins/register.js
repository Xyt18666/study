import axios from 'axios';

export default {
    data() {
        return {
            id: this.$route.params.id
        };
    },
    created() {
        axios.get('/equipment/pre-detail?id=' + this.id).then(({data}) => {
            if (data.code === 0) {
                this.setData(data.data);
            }
        });
    }
};
