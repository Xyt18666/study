<template>
    <el-container class="details">
        <el-header>{{ datas.title }}</el-header>
        <el-main>
            <el-row class="details_content">
                <el-col :span="16">
                    <div class="item_msg">
                        <div class="author">
                            作者
                            <span>{{ datas.msg.author }}</span>
                        </div>
                        --
                        <div class="times">
                            时间
                            <span>{{ datas.msg.times }}</span>
                        </div>
                        --
                        <div class="read">
                            阅读:
                            <span>{{ datas.msg.read }}</span>
                        </div>
                        --
                        <div class="comment">
                            评论:
                            <span>{{ datas.msg.comment }}</span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="text">
                        {{ datas.text }}
                    </div>
                </el-col>
                <el-col :span="16">
                    <el-row class="commentList">
                        <el-col
                            :span="24"
                            v-for="(d, i) in datas.commentList"
                            :key="i"
                            class="commentListItem"
                        >
                            <p>评论人：{{ d.nuser }}</p>
                            <p>评论时间：{{ d.times }}</p>
                            <p>评论内容：{{ d.text }}</p>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="16">
                    <h2>发送评论</h2>
                    <el-row class="sendMsg">
                        <textarea v-model="msg"></textarea>
                        <div class="send" @click="toCommentList">发送</div>
                    </el-row>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
// commentList: Array(1)
// nuser: "xx用户"
// text: "写的真好，自己都看不懂"
// times: "2020/12/8"

export default {
    data() {
        return {
            datas: this.$route.params,
            msg: "",
        };
    },
    created() {
        console.log(this.$route.params);
        console.log(this.$store.state.userId);
    },
    methods: {
        toCommentList() {
            this.datas.commentList.push({
                nuser: this.$store.state.userId,
                text: this.msg,
                times: new Date().toLocaleDateString(),
            });
            console.log(this.datas, this.msg);

            // 数据库要知道操作的是哪一个 ,首先是 用户id，某个版块，某条数据
            // this.$store.state.userId  this.$store.state.section  this.$store.state.listindex
            console.log(
                this.$store.state.userId,
                this.$store.state.section,
                this.$store.state.listindex
            );

            console.log(this.datas);

            this.$http
                .post("http://localhost:8088/addcomment", {
                    id: this.$store.state.userId,
                    section: this.$store.state.section,
                    index: this.$store.state.listindex,
                    data: this.datas.commentList,
                })
                .then(d => {
                    console.log(d);
                });
        },
    },
};
</script>

<style scoped>
.el-main {
    width: 960px;
    background: #fff;
}
.item_msg {
    display: flex;
}
.el-row,
.el-col {
    margin: 0px !important;
    padding: 0px !important;
}
.commentListItem {
    margin: 10px;
    background: #0f0;
}
.details_content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
}
</style>
