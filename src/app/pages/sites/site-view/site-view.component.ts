import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.css']
})
export class SiteViewComponent implements OnInit {

  constructor() { }

  isView = true;
  loginOption = "NOT REQUIRED"
  isSamePasswordforallUser = false
  
  ngOnInit(): void {
  }

}
