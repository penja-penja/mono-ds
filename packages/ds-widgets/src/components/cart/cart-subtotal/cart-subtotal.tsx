import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'wowx-cart-subtotal',
  styleUrl: './cart-subtotal.scss',
  shadow: true
})
export class CartSubtotal {
  @Event({ eventName: 'subtotalUpdated',
           composed: true,
           cancelable: true,
           bubbles: true }) subtotalUpdated: EventEmitter<any>;
  @Prop({ reflect: true }) productId: string;
  @Prop({ reflect: true }) maxQty: number;
  @Prop({ reflect: true }) price: number;
  @State() subtotal: number;

  private buildMaxQtyOptions() {
    const options = [];

    for (let i = 0; i <= this.maxQty; i++) {
      const defaultOption = (i === 1);
      options.push(<option key={ i } value={ i } selected={ defaultOption }>{ i }</option>)
    }

    return options;
  }

  private subtotalUpdatedHandler(e) {
    const qty = e.target.value;
    this.subtotal = qty * this.price;
    this.subtotalUpdated.emit({ productId: this.productId, qty: e.target.value });
  }

  componentWillLoad() {
    this.subtotal = this.price;
  }
  
  render() { 
    return (
      <div>
        <form>
          <label htmlFor="cart-control-qty">Qty</label>

          <select id="cart-control-qty" name="" onInput={(event) => this.subtotalUpdatedHandler(event)}>
            { this.buildMaxQtyOptions() }
          </select>
        </form>
        
        <p>Subtotal: ${ this.subtotal.toFixed(2) }</p>
      </div>
    );
  }
}