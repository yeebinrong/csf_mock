import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home.component';
import { OrderComponent } from './routes/order.component';
import { PayComponent} from './routes/pay.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'order', component:OrderComponent},
  { path: 'order/pay', component:PayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
