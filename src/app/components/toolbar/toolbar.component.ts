import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToolbarEvent, ToolbarEventType } from 'src/app/models/launchpad';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() showSearchBox: boolean;
  @Output() toolbarEvent = new EventEmitter<ToolbarEvent>();

  search(event: KeyboardEvent) {
    let emit = { event: event, type: ToolbarEventType.SearchEvent };
    this.toolbarEvent.emit(emit);
  }
}
