class CountdownTimer{
  constructor({selector, targetDate}){
    const container = document.querySelector(selector)
    const daysD = container.querySelector('[data-value="days"]')
    const hoursD = container.querySelector('[data-value="hours"]')
    const minsD = container.querySelector('[data-value="mins"]')
    const secsD = container.querySelector('[data-value="secs"]')
    const greeting = document.querySelector('.greeting')
    let timerId = setInterval(() => {
      const time = targetDate - new Date()
      if(time <= 0){
        clearInterval(timerId)
        greeting.textContent = 'Новий Рік настав!!!🎉🎁🎇'
        return;
      }
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      daysD.textContent = String(days).padStart(2, '0');
      hoursD.textContent = String(hours).padStart(2, '0');
      minsD.textContent = String(mins).padStart(2, '0');
      secsD.textContent = String(secs).padStart(2, '0');
    }, 1000)
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 1, 2027'),
});