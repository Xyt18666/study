<template>
    <div class="room">
        <h1>聊天室</h1>
        <ul>
            <li v-for="(i, d) in msgList" :key="d">
                <p>用户：{{ i.user }}</p>
                <p>时间：{{ new Date(i.date) }}</p>
                {{ i.msg }}
            </li>
        </ul>

        <input type="text" v-model="val" />
        <button @click="sendMsg">发送信息</button>
    </div>
</template>

<script>
const ws = new WebSocket("ws://localhost:8000");

export default {
    data() {
        return {
            val: "",
            userName: "",
            msgList: [123, 1232, 233],
        };
    },
    mounted() {
        this.userName = localStorage.getItem("userName");
        if (!this.userName) {
            this.$router.push("/login");
            return;
        }

        ws.addEventListener("open", this.onOpen.bind(this), false);
        ws.addEventListener("close", this.onClose.bind(this), false);
        ws.addEventListener("error", this.onError.bind(this), false);
        ws.addEventListener("message", this.onMessage.bind(this), false);
    },
    methods: {
        sendMsg() {
            if (!this.val.trim().length) {
                return;
            }

            ws.send(
                JSON.stringify({
                    id: new Date().getTime(),
                    user: this.userName,
                    dataTime: new Date().getTime(),
                    msg: this.val,
                })
            );
            this.val = "";
        },
        onOpen(e) {
            console.log(e, "webSocket  ----------- onOpen");
        },
        onClose(e) {
            console.log(e, "webSocket  ----------- onClose");
        },
        onError(e) {
            console.log(e, "webSocket  ----------- onError");
        },
        onMessage(e) {
            console.log(e, "webSocket  ----------- onMessage");
            console.log("msg", JSON.parse(e.data));

            this.msgList.push(JSON.parse(e.data));
        },
    },
};
</script>

<style></style>
