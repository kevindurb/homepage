const DEFAULT_BACKGROUND = 'https://source.unsplash.com/featured/?nature';
const BACKGROUND_URL_KEY = 'Background.url'

export class Background {
  constructor(
    storage,
    styleManager
  ) {
    this.storage = storage;
    this.styleManager = styleManager;
    this.body = document.body;
  }

  buildCSSUrlString(url) {
    return `url("${url}")`;
  }

  run() {
    this.styleManager.attach('/modules/Background/styles.css');
    const url = this.storage.get(BACKGROUND_URL_KEY);
    this.body.style.backgroundImage = this.buildCSSUrlString(url ?? DEFAULT_BACKGROUND);
  }
}
