import { getClientWidth } from '@/assets/lib/utils.js';
const windowWidth = getClientWidth();

export default {
    data() {
        return {
            currentDisplay: 'left',
            opacity: 1,
            translateX: 0,
            touch: {
                touching: false,
                startX: 0,
                startY: 0,
                percent: 0
            }
        }
    },
    methods: {
        onTouchStart(event) {
            this.touch.touching = true;
            event = event.touches[0];
            this.touch.startX = event.clientX;
            this.touch.startY = event.clientY;
        },
        onTouchMove(event) {
            if (!this.touch.touching) return;
            event = event.touches[0];
            const deltaX = event.clientX - this.touch.startX;
            const deltaY = event.clientY - this.touch.startY;
            if (Math.abs(deltaY) > Math.abs(deltaX)) return;

            const left = this.currentDisplay === 'left' ? 0 : -windowWidth;
            const translateX = Math.min(0, Math.max(-windowWidth, left + deltaX));
            this.touch.percent = Math.abs(translateX / windowWidth)
            this.opacity = 1 - this.touch.percent;
            this.translateX = translateX;
        },
        onTouchEnd(e) {
            if (!this.touch.touching) return;
            let opacity = 0;
            let translateX = 0;

            if (this.currentDisplay === 'left') {
                if (this.touch.percent > 0.1) {
                    opacity = 0;
                    translateX = -windowWidth;
                    this.currentDisplay = 'right';
                } else {
                    opacity = 1;
                    translateX = 0;
                }
            } else {
                if (this.touch.percent < 0.9) {
                    opacity = 1;
                    translateX = 0;
                    this.currentDisplay = 'left';
                } else {
                    opacity = 0;
                    translateX = -windowWidth;
                }
            }

            this.touch.touching = false;
            this.opacity = opacity;
            this.translateX = translateX;
        }
    }
};
