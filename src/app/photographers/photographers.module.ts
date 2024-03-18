import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotographersRoutingModule } from './photographers-routing.module';


@NgModule({
  declarations: [
    DetailsPageComponent,
    FooterComponent,
    HeaderComponent,
    LayoutPageComponent,
    ListPageComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PhotographersRoutingModule
  ],
  exports: [
    DetailsPageComponent,
    ListPageComponent,
  ]
})
export class PhotographersModule { }
