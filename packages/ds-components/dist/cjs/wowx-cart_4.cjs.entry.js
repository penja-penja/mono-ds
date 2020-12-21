'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-464de7a7.js');

const cartCss = "html{font-size:62.5%}body{color:#3a474e;font:14px/16px \"Open Sans\", sans-serif;margin:0}:root{--wx-primary-color:#178841}figure,form,p{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}.cart{border:1px solid #dedfdc;display:inline-block;padding:1.5rem}.cart-item{border-bottom:1px solid #d5d5d5;margin-bottom:1.5rem;padding-bottom:1rem;display:flex}.cart-item__content{width:100%}.cart-total{color:var(--wx-primary-color);font-weight:bold;text-align:right}";

const Cart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
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
      return (index.h("div", { class: "cart" }, this.cartItems.map((item) => index.h("div", { class: "cart-item" }, index.h("wowx-cart-image", { alt: item.image.alt, src: item.image.src }), index.h("div", { class: "cart-item__content" }, index.h("wowx-cart-header", { link: item.header.link, manufacturerName: item.header.manufacturerName, productName: item.header.productName }), index.h("wowx-cart-subtotal", { maxQty: item.subtotal.maxQty, price: item.subtotal.price, productId: item.id })))), index.h("p", { class: "cart-total" }, "Total: $", this.totalAmount.toFixed(2))));
    }
  }
};
Cart.style = cartCss;

const cartHeaderCss = ".cart-header-link{display:inline-block;margin-bottom:1.5rem}.cart-header-name:first-child{margin-bottom:0.5rem}";

const CartHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("a", { href: this.link, class: "cart-header-link" }, index.h("div", { class: "cart-header-name" }, this.manufacturerName, " "), index.h("div", { class: "cart-header-name" }, this.productName))));
  }
};
CartHeader.style = cartHeaderCss;

const cartImageCss = "figure{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1rem;margin-inline-end:1rem}img{max-width:8rem}";

const CartImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("figure", null, index.h("img", { src: this.src, alt: this.alt })));
  }
};
CartImage.style = cartImageCss;

const cartSubtotalCss = "html{font-size:62.5%}body{color:#3a474e;font:14px/16px \"Open Sans\", sans-serif;margin:0}:root{--wx-primary-color:#178841}figure,form,p{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}label{margin-right:0.5rem}form{margin-bottom:1.5rem}p{text-align:right}select{min-width:3.5rem;padding:0.25rem 1rem 0.25rem 0}";

const CartSubtotal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.subtotalUpdated = index.createEvent(this, "subtotalUpdated", 7);
  }
  buildMaxQtyOptions() {
    const options = [];
    for (let i = 0; i <= this.maxQty; i++) {
      const defaultOption = (i === 1);
      options.push(index.h("option", { key: i, value: i, selected: defaultOption }, i));
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
    return (index.h("div", null, index.h("form", null, index.h("label", { htmlFor: "cart-control-qty" }, "Qty"), index.h("select", { id: "cart-control-qty", name: "", onInput: (event) => this.subtotalUpdatedHandler(event) }, this.buildMaxQtyOptions())), index.h("p", null, "Subtotal: $", this.subtotal.toFixed(2))));
  }
};
CartSubtotal.style = cartSubtotalCss;

exports.wowx_cart = Cart;
exports.wowx_cart_header = CartHeader;
exports.wowx_cart_image = CartImage;
exports.wowx_cart_subtotal = CartSubtotal;
