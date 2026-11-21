class CountdownTimer {
    constructor({ selector, targetDate }){
        const container = document.querySelector(selector);
        const daysD = container.querySelector('[data-value="days"]');
        const hoursD = container.querySelector('[data-value="hours"]');
        const minsD = container.querySelector('[data-value="mins"]');
        const secsD = container.querySelector('[data-value="secs"]');
        const greeting = document.querySelector('.greeting');
        let timerId = setInterval(()=>{
            const time = targetDate - new Date();
            if (time <= 0) {
                clearInterval(timerId);
                greeting.textContent = "\u041D\u043E\u0432\u0438\u0439 \u0420\u0456\u043A \u043D\u0430\u0441\u0442\u0430\u0432!!!\uD83C\uDF89\uD83C\uDF81\uD83C\uDF87";
                return;
            }
            const days = Math.floor(time / 86400000);
            const hours = Math.floor(time % 86400000 / 3600000);
            const mins = Math.floor(time % 3600000 / 60000);
            const secs = Math.floor(time % 60000 / 1000);
            daysD.textContent = String(days).padStart(2, '0');
            hoursD.textContent = String(hours).padStart(2, '0');
            minsD.textContent = String(mins).padStart(2, '0');
            secsD.textContent = String(secs).padStart(2, '0');
        }, 1000);
    }
}
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('January 1, 2027')
});

//# sourceMappingURL=ft4-hw12.579125c3.js.map
