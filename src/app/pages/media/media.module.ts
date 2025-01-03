import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaUploadComponent } from './media-upload/media-upload.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';


@NgModule({
  declarations: [
    MediaUploadComponent,
    MediaGalleryComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
