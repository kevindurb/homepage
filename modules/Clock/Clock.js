const html = `
<div id="ClockTime"></div>
<div id="ClockDate"></div>
`;

export class Clock {
  constructor(styleManager) {
    this.styleManager = styleManager;
    this.body = document.body;

    this.$el = document.createElement('div');
    this.$el.setAttribute('id', 'Clock');
    this.$el.innerHTML = html;

    this.$time = this.$el.querySelector('#ClockTime');

    this.$date = this.$el.querySelector('#ClockDate');
  }

  update = () => {
    const now = new Date();
    this.$time.textContent = now.toLocaleTimeString();
    this.$date.textContent = now.toLocaleDateString();
    this.enqueueUpdate();
  }

  enqueueUpdate() {
    window.requestAnimationFrame(this.update);
  }

  run() {
    this.styleManager.attach('/modules/Clock/styles.css');

    this.body.appendChild(this.$el);

    this.enqueueUpdate();
  }
}
