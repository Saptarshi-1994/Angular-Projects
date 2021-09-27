import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MockupService } from '../mockup';

export class PageObj {
  pageNumbers: number[];
  currentPage: number;

  constructor() {
    this.pageNumbers = [];
    this.currentPage = 0;
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  constructor(private mockUpService: MockupService) {}

  totalDeliveryList: Array<any> = [];
  deliveryList: Array<any> = [];
  numberOfPages: PageObj = new PageObj();

  ngOnInit(): void {
    this.totalDeliveryList = this.mockUpService.getChildrenList();
    this.paginateItems();
  }

  paginateItems() {
    if (this.totalDeliveryList && this.totalDeliveryList.length > 10) {
      const totalPageNumber = Math.ceil(this.totalDeliveryList.length / 10);
      console.log('Pages: ', totalPageNumber);

      for (let index = 0; index <= totalPageNumber + 1; index++) {
        this.numberOfPages.pageNumbers.push(index);
      }
      this.numberOfPages.currentPage = 1;

      const firstPageItems = JSON.parse(JSON.stringify(this.totalDeliveryList));
      this.deliveryList = firstPageItems.slice(0, 10);
    }
  }

  selectPageItems(pageNumber: number) {
    const startList = (pageNumber - 1) * 10;
    let endList = null;
    if (this.totalDeliveryList.length > startList + 9) {
      endList = startList + 10;
    } else {
      endList = -1;
    }

    const allItems = JSON.parse(JSON.stringify(this.totalDeliveryList));
    const displayItems =
      endList === -1
        ? allItems.splice(startList)
        : allItems.slice(startList, endList);

    this.deliveryList = displayItems;
    this.numberOfPages.currentPage = pageNumber;
  }

 
}
