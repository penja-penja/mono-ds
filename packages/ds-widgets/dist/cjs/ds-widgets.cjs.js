'use strict';

const index = require('./index-3d1a6af5.js');

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ds-widgets.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["wowx-cart-footer.cjs",[[1,"wowx-cart-footer",{"savings":[513]}]]],["wowx-cart_4.cjs",[[1,"wowx-cart",{"cartItems":[16],"totalAmount":[32]},[[0,"subtotalUpdated","subtotalUpdatedHandler"]]],[1,"wowx-cart-header",{"manufacturerName":[513,"manufacturer-name"],"productName":[513,"product-name"],"link":[513]}],[1,"wowx-cart-image",{"src":[513],"alt":[513]}],[1,"wowx-cart-subtotal",{"productId":[513,"product-id"],"maxQty":[514,"max-qty"],"price":[514],"subtotal":[32]}]]]], options);
});
