import { TestBed } from '@angular/core/testing';

import { ShoppingCart } from './shopping-cart.service';

describe('ShoppingCart.ServiceService', () => {
  let service: ShoppingCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
