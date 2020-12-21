import { Component, h, Prop } from '@stencil/core';
export class CartHeader {
  render() {
    return (h("div", null,
      h("a", { href: this.link, class: "cart-header-link" },
        h("div", { class: "cart-header-name" },
          this.manufacturerName,
          " "),
        h("div", { class: "cart-header-name" }, this.productName))));
  }
  static get is() { return "wowx-cart-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./cart-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-header.css"]
  }; }
  static get properties() { return {
    "manufacturerName": {
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
      "attribute": "manufacturer-name",
      "reflect": true
    },
    "productName": {
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
      "attribute": "product-name",
      "reflect": true
    },
    "link": {
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
      "attribute": "link",
      "reflect": true
    }
  }; }
}
