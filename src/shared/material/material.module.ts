import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

const MAT_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatRippleModule,
  MatDividerModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MAT_MODULES],
  exports: [...MAT_MODULES],
})
export class MaterialModule {}
