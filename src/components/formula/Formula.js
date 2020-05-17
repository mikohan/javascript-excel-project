import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }
  static className = 'excel__formula';
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log(this.$root);
    console.log('onInput Formula', event.target.textContent.trim());
  }

  onClick() {
    console.log('on clic');
  }
}
