<template>
<ul class="dictionary-list">
    <li>
        <div>编号</div>
        <div>名称</div>
        <div v-if="type != 'categoryList'">颜色</div>
    </li>
    <li
        v-for="d in $store.state[type]"
        :key="d.id"
    >
        <div>{{ d.id }}</div>
        <div>{{ d.name }}</div>
        <div v-if="type != 'categoryList'">{{ d.color }}</div>
    </li>
</ul>
</template>

<script>
export default {
    props: ['type']
};
</script>

<style lang="sass">
.dictionary-list
    li
        display: flex
        width: 100%
        border-bottom: 1px solid #f0f0f0
        &:first-child
            opacity: .6
        & > div
            flex: 1
            text-align: center
            line-height: 40px
</style>
