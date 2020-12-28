import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
{
	path:"", component: HomeComponent
},
{
	path: "blog", component: BlogComponent
}, 
{
	path: "travels", component: TravelsComponent
},
{
	path: "cart", component: CartComponent
},
{
   path : 'locations/:locationsId' , component : ProductDescriptionComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
