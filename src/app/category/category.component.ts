import { Component, OnInit } from '@angular/core';
import { DataShareService } from './../data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  locationArray: any;
  categoryList: any;

  constructor(private dataService: DataShareService, private router: Router) {
    dataService.getCategories().subscribe(data => {
      this.locationArray = data.data.locations;
      const mainIndex = localStorage.getItem('mainIndex');
      const subIndex = localStorage.getItem('subIndex');
      this.categoryList = this.locationArray[mainIndex].branches[subIndex].categories;
      if(this.categoryList) {
        this.categoryList.forEach( obj => {
          obj.image = 'assets/' + obj.image;
        });
      }
      this.dataService.watchStorage().subscribe((data: any) => {
        const branches = this.locationArray[mainIndex].branches[data];
        if (branches) {
          this.categoryList = this.locationArray[mainIndex].branches[data].categories;
          if (this.categoryList) {
            this.categoryList.forEach( obj => {
              if (obj.image.indexOf('assets') === -1) {
                obj.image = 'assets/' + obj.image;
              }
            });
          }
        }
      });
    });
  }

  ngOnInit() {

  }

  getSubCat(index: any) {
    localStorage.setItem('prodIndex', index);
    this.router.navigate(['./subCategory']);
  }

}
