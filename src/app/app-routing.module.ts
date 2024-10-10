import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    data: { breadcrumb: 'Users', title: 'Users', headerTitle: 'Users' },
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
    data: { breadcrumb: 'Products', title: 'Products', headerTitle: 'Products' },
  },
  {
    path: 'binary-string',
    loadChildren: () => import('./binary-string/binary-string.module').then((m) => m.BinaryStringModule),
    data: { breadcrumb: 'Binary string', title: 'Binary string', headerTitle: 'Binary string' },
  },
  {
    path: 'sb1/users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    outlet: 'sb1'
  },
  {
    path: 'sb1/products',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
    outlet: 'sb1'
  },
  {
		path: '404',
		component: NotFoundComponent,
		data: { breadcrumb: 'not found' },
	},
	{
		path: '**',
		redirectTo: '/404',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
