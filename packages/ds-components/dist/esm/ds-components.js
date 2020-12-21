import { p as promiseResolve, b as bootstrapLazy } from './index-54cd568a.js';

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["wowx-cart-footer",[[1,"wowx-cart-footer",{"savings":[513]}]]],["wowx-cart_4",[[1,"wowx-cart",{"cartItems":[16],"totalAmount":[32]},[[0,"subtotalUpdated","subtotalUpdatedHandler"]]],[1,"wowx-cart-header",{"manufacturerName":[513,"manufacturer-name"],"productName":[513,"product-name"],"link":[513]}],[1,"wowx-cart-image",{"src":[513],"alt":[513]}],[1,"wowx-cart-subtotal",{"productId":[513,"product-id"],"maxQty":[514,"max-qty"],"price":[514],"subtotal":[32]}]]]], options);
});
