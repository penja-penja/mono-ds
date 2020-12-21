import { r as registerInstance, h } from './index-54cd568a.js';

const cartFooterCss = "";

const CartFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("p", null, "Total savings: ", this.savings)));
  }
};
CartFooter.style = cartFooterCss;

export { CartFooter as wowx_cart_footer };
