
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/E-commerce/login",
    "route": "/E-commerce"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/login"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/register"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/forgot"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/home"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GEIVPLKV.js"
    ],
    "route": "/E-commerce/products"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/brands"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/categories"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/allorders"
  },
  {
    "renderMode": 1,
    "route": "/E-commerce/details/*"
  },
  {
    "renderMode": 1,
    "route": "/E-commerce/details/*/*"
  },
  {
    "renderMode": 1,
    "route": "/E-commerce/checkout/*"
  },
  {
    "renderMode": 2,
    "route": "/E-commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12632, hash: '849f08b497452883bdb9fcb9b0d5c5143843dde3bde5f93864a1a88b46a548e3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: 'aa9e4d4670eda0d09ae34a23e8c1730f44759fea569a779d9cea1df91377b49d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30701, hash: 'd899ded90ddfe1bc9716e93a3b45edd7db4f05d8584e65657d6cf0648f5c1244', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31466, hash: '46687fe3a3a416da264d638ce1f26486dbfb8c4687b99fdc2841f5f12bc9e1de', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30648, hash: '749deed2fcf48b1a91a2bddb1321d60d212ea5ac7aff9b93b2eb6d25a9d8c773', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30649, hash: 'c55ea2512ed3855010d32eadd5727e1fc93c99aaa07bac47012493a98a31c99f', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30648, hash: '749deed2fcf48b1a91a2bddb1321d60d212ea5ac7aff9b93b2eb6d25a9d8c773', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30648, hash: '749deed2fcf48b1a91a2bddb1321d60d212ea5ac7aff9b93b2eb6d25a9d8c773', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30648, hash: '749deed2fcf48b1a91a2bddb1321d60d212ea5ac7aff9b93b2eb6d25a9d8c773', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30649, hash: 'c55ea2512ed3855010d32eadd5727e1fc93c99aaa07bac47012493a98a31c99f', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32693, hash: 'ebbb7bcc5c3b00b31a17eeea4c5ec206ee62996b8816993e06f68d7c14825677', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'styles-UU4PIMIU.css': {size: 212505, hash: 'YWDndgbpuxA', text: () => import('./assets-chunks/styles-UU4PIMIU_css.mjs').then(m => m.default)}
  },
};
