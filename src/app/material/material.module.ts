import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({

  exports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
