const Ws = require("ws");

(Ws => {
    const server = new Ws.Server({ port: 8000 });

    const init = () => {
        bindEvent();
    };

    function bindEvent() {
        server.on("open", onOpen);
        server.on("close", onClose);
        server.on("error", onError);
        server.on("connection", onConnection);
    }

    function onOpen() {
        console.log("onOpen");
    }
    function onClose() {
        console.log("onClose");
    }
    function onError() {
        console.log("onError");
    }
    function onConnection(ws) {
        console.log("onConnection");
        ws.on("message", onMessage);
    }

    function onMessage(msg) {
        console.log("onMessage", JSON.parse(msg));

        server.clients.forEach(c => {
            c.send(msg);
        });
    }

    init();
})(Ws);
