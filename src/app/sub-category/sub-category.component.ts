import { Component, OnInit } from '@angular/core';
import { DataShareService } from './../data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  subCategoryList: any;
  currentCategoryName: string;
  locationArray: any;

  constructor(private dataService: DataShareService, private router: Router) {
    dataService.getCategories().subscribe(data => {
    this.locationArray = data.data.locations;

    const mainIndex = localStorage.getItem('mainIndex');
    const subIndex = localStorage.getItem('subIndex');
    const prodIndex = localStorage.getItem('prodIndex');
    this.currentCategoryName = this.locationArray[mainIndex].branches[subIndex].categories[prodIndex].name;
    this.subCategoryList = this.locationArray[mainIndex].branches[subIndex].categories[prodIndex].subcategories;
   
    if (this.subCategoryList) {
      this.subCategoryList.forEach( obj => {
        obj.image = 'assets/' + obj.image;
      });
    }

   });
  }

  ngOnInit() {}

  goToMainCat() {
    this.router.navigate(['./mainCategory']);
  }


}
