import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {AuthService, LogService} from '../shared/services/firebase-api';
import {LogModel} from '../shared/model';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;
  navList = [
    {
      title: 'nav.home', icon: 'home', isOpen: true, child:
        [
            {title: 'nav.initialize', url: '/pages/data-initialize'},
          {title: 'nav.dashboard', url: '/pages/dashboard'},
          {title: 'nav.banner', url: '/pages/banner'},
          {title: 'nav.notice', url: '/pages/notice'},
          {title: 'nav.coupon', url: '/pages/coupon'},
          {title: 'nav.pay', url: '/pages/pays'}
        ]
    },
    {
      title: 'nav.product', icon: 'profile', isOpen: false, child:
        [
          {title: 'nav.cate', url: '/pages/cate'},
          {title: 'nav.subCate', url: '/pages/sub-cate'},
          {title: 'nav.relation', url: '/pages/cate-relation'},
          {title: 'nav.good', url: '/pages/good'}
        ]
    },
    {
      title: 'nav.order', icon: 'table', isOpen: false, child:
        [
          {title: 'nav.order', url: '/pages/order'},
          {title: 'nav.ows', url: '/pages/ows'},
          {title: 'nav.express', url: '/pages/delivery'}
        ]
    },
    {
      title: 'nav.users', icon: 'user', isOpen: false, child:
        [
          {title: 'nav.users', url: '/pages/users'},
          {title: 'nav.address', url: '/pages/address'},
          {title: 'nav.favorite', url: '/pages/favorite'},
          {title: 'nav.log', url: '/pages/login-log'}
        ]
    },
    {
      title: 'nav.statistics', icon: 'user', isOpen: false, child:
        [
          {title: 'nav.log-chart', url: '/pages/log-chart'},
          {title: 'nav.order-chart', url: '/pages/order-chart'},
        ]
    }
  ];

  constructor(private router: Router,
              private datePipe: DatePipe,
              private logService: LogService,
              private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      }
    });
  }

  ngOnInit() {
  }

  addLog() {
    const log = new LogModel();
    log.userId = this.authService.user.uid;
    log.device = this.authService.device;
    log.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    this.logService.addLog(log);
  }
}
