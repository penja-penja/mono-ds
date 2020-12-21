import { Component, h, Listen, Prop, State } from '@stencil/core';
export class Cart {
  subtotalUpdatedHandler(event) {
    const item = this.cartItems.find(item => item.id === event.detail.productId);
    if (item) {
      item.qty = event.detail.qty;
    }
    this.setTotalAmount();
  }
  setTotalAmount() {
    this.totalAmount = this.cartItems.map(x => x.subtotal.price * x.qty)
      .reduce((currentVal, nextVal) => currentVal + nextVal);
  }
  componentWillRender() {
    if (!this.cartItems || !this.cartItems.length)
      return;
    this.setTotalAmount();
  }
  render() {
    if (this.cartItems && this.cartItems.length) {
      return (h("div", { class: "cart" },
        this.cartItems.map((item) => h("div", { class: "cart-item" },
          h("wowx-cart-image", { alt: item.image.alt, src: item.image.src }),
          h("div", { class: "cart-item__content" },
            h("wowx-cart-header", { link: item.header.link, manufacturerName: item.header.manufacturerName, productName: item.header.productName }),
            h("wowx-cart-subtotal", { maxQty: item.subtotal.maxQty, price: item.subtotal.price, productId: item.id })))),
        h("p", { class: "cart-total" },
          "Total: $",
          this.totalAmount.toFixed(2))));
    }
  }
  static get is() { return "wowx-cart"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./cart.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cart.css"]
  }; }
  static get properties() { return {
    "cartItems": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<CartItemInterface>",
        "resolved": "CartItemInterface[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "CartItemInterface": {
            "location": "import",
            "path": "./cart.interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "totalAmount": {}
  }; }
  static get listeners() { return [{
      "name": "subtotalUpdated",
      "method": "subtotalUpdatedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
