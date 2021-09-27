import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {

  @Input() totalDeliveryList: Array<any> = [];
  @Input() numberOfPages: any = {};

  @Output() displayPageNumber: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  selectNextOrPrevPage(option: string) {
    if (this.numberOfPages.currentPage === 1 && option === 'PREV') {
      return;
    }

    if (
      this.numberOfPages.currentPage ===
        this.numberOfPages.pageNumbers.length - 2 &&
      option === 'NEXT'
    ) {
      return;
    }

    switch (option) {
      case 'PREV': {
        const pageNumberToDisplay = this.numberOfPages.currentPage - 1;
        this.displayPageNumber.emit(pageNumberToDisplay);
        break;
      }

      case 'NEXT': {
        const pageNumberToDisplay = this.numberOfPages.currentPage + 1;
        this.displayPageNumber.emit(pageNumberToDisplay);
        break;
      }

      default:
        break;
    }
  }


  changePage(pageNumber: number) {
    this.displayPageNumber.emit(pageNumber);
  }
}
