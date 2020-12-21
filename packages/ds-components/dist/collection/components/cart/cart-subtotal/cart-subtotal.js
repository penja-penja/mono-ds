import { Component, Event, h, Prop, State } from '@stencil/core';
export class CartSubtotal {
  buildMaxQtyOptions() {
    const options = [];
    for (let i = 0; i <= this.maxQty; i++) {
      const defaultOption = (i === 1);
      options.push(h("option", { key: i, value: i, selected: defaultOption }, i));
    }
    return options;
  }
  subtotalUpdatedHandler(e) {
    const qty = e.target.value;
    this.subtotal = qty * this.price;
    this.subtotalUpdated.emit({ productId: this.productId, qty: e.target.value });
  }
  componentWillLoad() {
    this.subtotal = this.price;
  }
  render() {
    return (h("div", null,
      h("form", null,
        h("label", { htmlFor: "cart-control-qty" }, "Qty"),
        h("select", { id: "cart-control-qty", name: "", onInput: (event) => this.subtotalUpdatedHandler(event) }, this.buildMaxQtyOptions())),
      h("p", null,
        "Subtotal: $",
        this.subtotal.toFixed(2))));
  }
  static get is() { return "wowx-cart-subtotal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./cart-subtotal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-subtotal.css"]
  }; }
  static get properties() { return {
    "productId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "product-id",
      "reflect": true
    },
    "maxQty": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max-qty",
      "reflect": true
    },
    "price": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "price",
      "reflect": true
    }
  }; }
  static get states() { return {
    "subtotal": {}
  }; }
  static get events() { return [{
      "method": "subtotalUpdated",
      "name": "subtotalUpdated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
