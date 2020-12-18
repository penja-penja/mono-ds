import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wowx-cart-footer',
  styleUrl: './cart-footer.scss',
  shadow: true
})
export class CartFooter {
  @Prop({ reflect: true }) savings: string;

  render() { 
    return (
      <div>
        <p>Total savings: { this.savings }</p>
      </div>
    );
  }
}