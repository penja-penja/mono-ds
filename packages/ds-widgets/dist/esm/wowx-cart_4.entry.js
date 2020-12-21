import { r as registerInstance, h, c as createEvent } from './index-e70de69b.js';

const cartCss = "html{font-size:62.5%}body{color:#3a474e;font:14px/16px \"Open Sans\", sans-serif;margin:0}:root{--wx-primary-color:#178841}figure,form,p{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}.cart{border:1px solid #dedfdc;display:inline-block;padding:1.5rem}.cart-item{border-bottom:1px solid #d5d5d5;margin-bottom:1.5rem;padding-bottom:1rem;display:flex}.cart-item__content{width:100%}.cart-total{color:var(--wx-primary-color);font-weight:bold;text-align:right}";

const Cart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return (h("div", { class: "cart" }, this.cartItems.map((item) => h("div", { class: "cart-item" }, h("wowx-cart-image", { alt: item.image.alt, src: item.image.src }), h("div", { class: "cart-item__content" }, h("wowx-cart-header", { link: item.header.link, manufacturerName: item.header.manufacturerName, productName: item.header.productName }), h("wowx-cart-subtotal", { maxQty: item.subtotal.maxQty, price: item.subtotal.price, productId: item.id })))), h("p", { class: "cart-total" }, "Total: $", this.totalAmount.toFixed(2))));
    }
  }
};
Cart.style = cartCss;

const cartHeaderCss = ".cart-header-link{display:inline-block;margin-bottom:1.5rem}.cart-header-name:first-child{margin-bottom:0.5rem}";

const CartHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("a", { href: this.link, class: "cart-header-link" }, h("div", { class: "cart-header-name" }, this.manufacturerName, " "), h("div", { class: "cart-header-name" }, this.productName))));
  }
};
CartHeader.style = cartHeaderCss;

const cartImageCss = "figure{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1rem;margin-inline-end:1rem}img{max-width:8rem}";

const CartImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("figure", null, h("img", { src: this.src, alt: this.alt })));
  }
};
CartImage.style = cartImageCss;

const cartSubtotalCss = "html{font-size:62.5%}body{color:#3a474e;font:14px/16px \"Open Sans\", sans-serif;margin:0}:root{--wx-primary-color:#178841}figure,form,p{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}label{margin-right:0.5rem}form{margin-bottom:1.5rem}p{text-align:right}select{min-width:3.5rem;padding:0.25rem 1rem 0.25rem 0}";

const CartSubtotal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.subtotalUpdated = createEvent(this, "subtotalUpdated", 7);
  }
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
    return (h("div", null, h("form", null, h("label", { htmlFor: "cart-control-qty" }, "Qty"), h("select", { id: "cart-control-qty", name: "", onInput: (event) => this.subtotalUpdatedHandler(event) }, this.buildMaxQtyOptions())), h("p", null, "Subtotal: $", this.subtotal.toFixed(2))));
  }
};
CartSubtotal.style = cartSubtotalCss;

export { Cart as wowx_cart, CartHeader as wowx_cart_header, CartImage as wowx_cart_image, CartSubtotal as wowx_cart_subtotal };
