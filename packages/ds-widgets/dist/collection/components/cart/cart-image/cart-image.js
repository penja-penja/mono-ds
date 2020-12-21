import { Component, h, Prop } from '@stencil/core';
export class CartImage {
  render() {
    return (h("figure", null,
      h("img", { src: this.src, alt: this.alt })));
  }
  static get is() { return "wowx-cart-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./cart-image.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-image.css"]
  }; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
      "reflect": true
    },
    "alt": {
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
      "attribute": "alt",
      "reflect": true
    }
  }; }
}
