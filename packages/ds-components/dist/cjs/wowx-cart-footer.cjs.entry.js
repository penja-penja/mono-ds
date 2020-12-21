'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-464de7a7.js');

const cartFooterCss = "";

const CartFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("p", null, "Total savings: ", this.savings)));
  }
};
CartFooter.style = cartFooterCss;

exports.wowx_cart_footer = CartFooter;
