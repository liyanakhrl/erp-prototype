import { NgModule } from '@angular/core';
import { PartialModule } from '../../../partial/partial.module';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    PartialModule
  ]
})
export class GalleryModule { }
