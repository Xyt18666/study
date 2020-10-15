import "@/assets/css/toast.sass";

function Toast(str, time = 1500) {
    const tip = document.createElement("div");
    tip.className = "toast animate__animated animate__heartBeat";
    tip.innerHTML = str;
    document.body.appendChild(tip);
    setTimeout(() => {
        document.body.removeChild(tip);
    }, time);
}

export default Toast;
