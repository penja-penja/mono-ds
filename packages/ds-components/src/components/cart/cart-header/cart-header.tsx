import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wowx-cart-header',
  styleUrl: './cart-header.scss',
  shadow: true
})
export class CartHeader {
  @Prop({ reflect: true }) manufacturerName: string;
  @Prop({ reflect: true }) productName: string;
  @Prop({ reflect: true }) link: string;

  render() { 
    return (
      <div>
        <a href={ this.link } class="cart-header-link">
          <div class="cart-header-name">{ this.manufacturerName } </div>
          <div class="cart-header-name">{ this.productName }</div>
        </a>
      </div>
    );
  }
}