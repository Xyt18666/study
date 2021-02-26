<template>
    <div class="study">
        <h1>study</h1>
        <list-item :datas="{ names: 'name', time: '12' }"></list-item>
        <p>输出vuex :{{ $store.state.size }} 和 {{ $store.state.title }}</p>
        <p @click="addSize">size++</p>
        <p @click="setDatas">调用action</p>
        <p>{{ size }}</p>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ListItem from "../components/ListItem.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"; //vue2 中的方式依旧可用
import { useStore } from "vuex";

export default defineComponent({
    components: { ListItem },
    computed: {
        ...mapState(["size"]),
        ...mapGetters([]),
    },
    methods: {
        ...mapMutations([]),
        ...mapActions([]),
    },
    setup() {
        const store = useStore(); // 使用useStore方法

        function addSize() {
            store.commit("setSize", ++store.state.size);
        }

        function setDatas() {
            store.dispatch("setAll", {
                size: 10,
                title: "使用action修改",
            });
        }

        return { addSize, setDatas };
    },
});
</script>

<style></style>
