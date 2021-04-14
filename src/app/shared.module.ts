import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzButtonModule,
    NzDividerModule,
    NzDropDownModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
  ],
  exports: [
    NzAvatarModule,
    NzButtonModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzDividerModule,
    NzDropDownModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
  ]
})
export class SharedModule { }
