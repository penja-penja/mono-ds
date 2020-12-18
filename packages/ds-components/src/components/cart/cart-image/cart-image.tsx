import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wowx-cart-image',
  styleUrl: './cart-image.scss',
  shadow: true
})
export class CartImage {
  @Prop({ reflect: true }) src: string;
  @Prop({ reflect: true }) alt: string;

  render() { 
    return (
      <figure>
        <img src={ this.src } alt={ this.alt }/>
      </figure>
    );
  }
}