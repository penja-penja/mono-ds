'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-464de7a7.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["wowx-cart-footer.cjs",[[1,"wowx-cart-footer",{"savings":[513]}]]],["wowx-cart_4.cjs",[[1,"wowx-cart",{"cartItems":[16],"totalAmount":[32]},[[0,"subtotalUpdated","subtotalUpdatedHandler"]]],[1,"wowx-cart-header",{"manufacturerName":[513,"manufacturer-name"],"productName":[513,"product-name"],"link":[513]}],[1,"wowx-cart-image",{"src":[513],"alt":[513]}],[1,"wowx-cart-subtotal",{"productId":[513,"product-id"],"maxQty":[514,"max-qty"],"price":[514],"subtotal":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
