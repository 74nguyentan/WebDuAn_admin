/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService,
     private menuService: NbMenuService,private router: Router,private authService: NbAuthService) {
  }

  onContecxtItemSelection(title,link) {
    console.log('click', title,link);
    // alert('Xin Chao');
    // this.router.navigate(['auth/login']);

  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title,event.item.link);
      });
  }
}
