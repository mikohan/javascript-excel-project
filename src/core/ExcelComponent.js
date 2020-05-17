import { DomListener } from '@core/DomListiner';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDOMListiners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
