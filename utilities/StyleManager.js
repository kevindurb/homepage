export class StyleManager {
  constructor() {
    this.head = document.head
  }

  attach(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    this.head.appendChild(link);
  }
}
