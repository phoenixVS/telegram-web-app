import { Routes } from '@angular/router'
import { ShopComponent } from './pages/shop/shop.component'

export const routes: Routes = [
  { path: '', component: ShopComponent, pathMatch: 'full' },
]
