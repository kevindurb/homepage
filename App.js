import { Container } from './Container.js';

import { Storage } from './utilities/Storage.js';
import { StyleManager } from './utilities/StyleManager.js';

import { Background } from './modules/Background/Background.js';
import { Clock } from './modules/Clock/Clock.js';

export class App {
  constructor() {
    this.container = new Container();

    this.container.set('storage', () => (
      new Storage()
    ))

    this.container.set('styleManager', () => (
      new StyleManager()
    ))

    this.container.set('background', (c) => (
      new Background(
        c.get('storage'),
        c.get('styleManager'),
      )
    ));

    this.container.set('clock', (c) => (
      new Clock(
        c.get('styleManager'),
      )
    ));
  }
  run() {
    this.container.get('background').run();
    this.container.get('clock').run();
  }
}
