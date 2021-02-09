import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from '../shared';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
      {path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)},
      {path: 'notice', loadChildren: () => import('./notice/notice.module').then(m => m.NoticeModule)},
      {path: 'cate', loadChildren: () => import('./cate/cate.module').then(m => m.CateModule)},
      {path: 'sub-cate', loadChildren: () => import('./sub-cate/sub-cate.module').then(m => m.SubCateModule)},
      {path: 'cate-relation', loadChildren: () => import('./cate-relation/cate-relation.module').then(m => m.CateRelationModule)},
      {path: 'coupon', loadChildren: () => import('./coupon/coupon.module').then(m => m.CouponModule)},
      {path: 'pays', loadChildren: () => import('./pays/pays.module').then(m => m.PaysModule)},
      {path: 'good', loadChildren: () => import('./good/good.module').then(m => m.GoodModule)},
      {path: 'ows', loadChildren: () => import('./ows/ows.module').then(m => m.OwsModule)},
      {path: 'delivery', loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule)},
      {path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
      {path: 'address', loadChildren: () => import('./address/address.module').then(m => m.AddressModule)},
      {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
      {path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule)},
      {path: 'login-log', loadChildren: () => import('./login-log/login-log.module').then(m => m.LoginLogModule)},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'data-initialize', loadChildren: () => import('./data-initialize/data-initialize.module').then(m => m.DataInitializeModule)},
      {path: 'log-chart', loadChildren: () => import('./log-chart/log-chart.module').then(m => m.LogChartModule)},
      {path: 'order-chart', loadChildren: () => import('./order-chart/order-chart.module').then(m => m.OrderChartModule)},
      {path: 'not-found', component: NotFoundComponent},
      {path: '**', redirectTo: 'not-found'}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
