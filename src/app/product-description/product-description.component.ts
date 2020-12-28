import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { locations } from '../products';
import { ShoppingCart } from '../shopping-cart.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
y;
  constructor(private route: ActivatedRoute, private cartService: ShoppingCart) { }

addToCart(y) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(y);

 }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
   this.y = locations[+params.get('locationsId')];
   // console.table(params);
  });
  }

}
