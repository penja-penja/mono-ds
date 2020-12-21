import { p as promiseResolve, b as bootstrapLazy } from './index-e70de69b.js';

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["wowx-cart-footer",[[1,"wowx-cart-footer",{"savings":[513]}]]],["wowx-cart_4",[[1,"wowx-cart",{"cartItems":[16],"totalAmount":[32]},[[0,"subtotalUpdated","subtotalUpdatedHandler"]]],[1,"wowx-cart-header",{"manufacturerName":[513,"manufacturer-name"],"productName":[513,"product-name"],"link":[513]}],[1,"wowx-cart-image",{"src":[513],"alt":[513]}],[1,"wowx-cart-subtotal",{"productId":[513,"product-id"],"maxQty":[514,"max-qty"],"price":[514],"subtotal":[32]}]]]], options);
  });
};

export { defineCustomElements };
