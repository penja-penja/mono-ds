import { Component, h, Prop } from '@stencil/core';
export class CartFooter {
  render() {
    return (h("div", null,
      h("p", null,
        "Total savings: ",
        this.savings)));
  }
  static get is() { return "wowx-cart-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./cart-footer.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-footer.css"]
  }; }
  static get properties() { return {
    "savings": {
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
      "attribute": "savings",
      "reflect": true
    }
  }; }
}
