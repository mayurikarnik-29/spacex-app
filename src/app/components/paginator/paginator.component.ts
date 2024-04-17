import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MAT_SELECT_CONFIG, MatSelectConfig } from '@angular/material/select';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrl: './paginator.component.scss',
    viewProviders: [
        {
            provide: MAT_SELECT_CONFIG,
            useValue: {
                overlayPanelClass: "paginator-panel"
            } as MatSelectConfig
        }
    ]
})
export class PaginatorComponent {
    @Input() length: number;
    @Input() pageSize: number;
    @Input() pageSizeOptions: number[];
    @Input() label: string;
    @Output() page = new EventEmitter<PageEvent>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() { }

    onPaginator(event: PageEvent) {
        this.page.emit(event);
    }

}