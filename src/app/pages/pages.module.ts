import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutTwoColumnComponent } from './layout-two-column/layout-two-column.component';
import { LayoutTwoColumnTwoComponent } from './layout-two-column-two/layout-two-column-two.component';
import { AppsComponent } from './apps/apps.component';
import { SitesComponent } from './sites/sites.component';
import { SiteViewComponent } from './sites/site-view/site-view.component';


@NgModule({
  declarations: [
    HomeComponent, 
    LayoutTwoColumnComponent, 
    LayoutTwoColumnTwoComponent, 
    AppsComponent, 
    SitesComponent, 
    SiteViewComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
