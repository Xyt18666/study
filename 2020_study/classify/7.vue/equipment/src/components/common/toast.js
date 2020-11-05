import '@/assets/style/toast.sass';

function Toast (str, options = {}) {
    let { time, html } = options;
    if (!time) time = 1200;
    const toastEl = document.createElement('div');
    const className = 'toast-container';
    toastEl.className = className;
    if (html) {
        toastEl.innerHTML = str;
    } else {
        if (toastEl.textContent) {
            toastEl.textContent = str;
        } else {
            toastEl.innerText = str;
        }
    }
    document.body.appendChild(toastEl);
    setTimeout(() => {
        toastEl.className = className + ' fade-out';
        setTimeout(() => {
            document.body.removeChild(toastEl);
        }, 300);
    }, time);
}

export default Toast;
