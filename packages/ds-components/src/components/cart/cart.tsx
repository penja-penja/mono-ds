import { Component, h, Listen, Prop, State } from '@stencil/core';
import { CartItemInterface } from './cart.interfaces';

@Component({
  tag: 'wowx-cart',
  styleUrl: './cart.scss',
  shadow: true
})
export class Cart {
  @Prop({ reflect: true }) cartItems: Array<CartItemInterface>;
  @State() totalAmount: number;

  @Listen('subtotalUpdated')
  subtotalUpdatedHandler(event: CustomEvent<any>): void {
    const item = this.cartItems.find(item => item.id === event.detail.productId);
    if (item) {
      item.qty = event.detail.qty;
    }

    this.setTotalAmount(); 
  }

  setTotalAmount(): void {
    this.totalAmount = this.cartItems.map(x => x.subtotal.price * x.qty)
                                     .reduce((currentVal, nextVal) => currentVal + nextVal);
  }


  componentWillRender() {
    if (!this.cartItems || !this.cartItems.length) return;

    this.setTotalAmount();
  }

  render() {
    if (this.cartItems && this.cartItems.length) {
      return (
        <div class="cart">
          { 
            this.cartItems.map((item) => 
              <div class="cart-item">
                <wowx-cart-image alt={ item.image.alt } 
                               src={ item.image.src }>
                </wowx-cart-image>

                <div class="cart-item__content">
                  <wowx-cart-header link={ item.header.link }
                                  manufacturerName={ item.header.manufacturerName }
                                  productName={ item.header.productName }>
                  </wowx-cart-header>
         
                  <wowx-cart-subtotal maxQty={ item.subtotal.maxQty }
                                    price={ item.subtotal.price }
                                    productId={ item.id }>
                  </wowx-cart-subtotal>
                </div>
              </div>
            )
          }

          <p class="cart-total">Total: ${ this.totalAmount.toFixed(2) }</p>
        </div> 
      );
    }
  }
}