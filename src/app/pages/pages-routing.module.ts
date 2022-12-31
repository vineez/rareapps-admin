import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutTwoColumnTwoComponent } from './layout-two-column-two/layout-two-column-two.component';
import { LayoutTwoColumnComponent } from './layout-two-column/layout-two-column.component';
import { SiteViewComponent } from './sites/site-view/site-view.component';
import { SitesComponent } from './sites/sites.component';

import { AuthGuard } from '../helpers/guard/auth.guard';

const routes: Routes = [
  { path: '', component: SitesComponent },
  { path: 'one', component: LayoutTwoColumnComponent },
  { path: 'two', component: LayoutTwoColumnTwoComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'sites/site-view', component: SiteViewComponent, canActivate: [AuthGuard] },
  { path: 'site-view', component: SiteViewComponent },
  { path: 'apps', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
