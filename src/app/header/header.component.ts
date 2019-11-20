import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  configUrl: string;
  location: any;
  sublocation: any;

  constructor(private router: Router, private dataService: DataShareService) {
    dataService.getCategories().subscribe(data => {
      this.location = data.data.locations;
      console.log('this.location', this.location);
    });
   }

  ngOnInit() {
  }

  selectedLoc(index: any) {
    const selectedIndex = index;
    localStorage.setItem('mainIndex', selectedIndex);
    this.sublocation =  this.location[selectedIndex].branches;
    this.router.navigate(['./']);
  }

  selectedSubLoc(index: any) {
    const selectedIndex = localStorage.getItem('mainIndex');
    this.sublocation =  this.location[selectedIndex].branches;
    const selectedSubIndex = index;
    this.dataService.setItem('subIndex', selectedSubIndex);
    this.router.navigate(['./mainCategory']);
  }

}
