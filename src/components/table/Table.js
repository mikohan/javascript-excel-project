import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.tempate';
import { resizeHandler } from './table.resize';
import { shouldResize } from './table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } // If statement ends
  }

  toHTML() {
    return createTable(20);
  }
}
