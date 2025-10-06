
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
      "chunk-4HHUWUOF.js"
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
    'index.csr.html': {size: 12632, hash: 'acc0f88aa45d9e968b9068e4fc536ae0051a14d744d7007d18b3fab279842126', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: '162bf21340b866621968a2aadc0c775e5bdcaafe4e546e9cfbed5b22fe3b320c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31485, hash: '80c9ded47b4b8a5a1bc3ae729c62f2742836e9fecf34bd5c1ebd10f64cd4076b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30668, hash: 'b37e4a9ef8174f66f10dc0e15150efce69832c99bff36c7b88e6c1fc19b66e68', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30667, hash: 'dfd2467ffddef09eca972fce2519884af0c8d6d04d101da399f485163b19d061', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30668, hash: 'b37e4a9ef8174f66f10dc0e15150efce69832c99bff36c7b88e6c1fc19b66e68', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30720, hash: '1e2aa482497ed5f71bcdbc2403d49866b8e1c471b586ec803c3bc538fb8ddf4c', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30668, hash: 'b37e4a9ef8174f66f10dc0e15150efce69832c99bff36c7b88e6c1fc19b66e68', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32712, hash: '8794e16e316486013c4a6149f338b94a9bee80380eef0c8985d363af3785d316', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30667, hash: 'dfd2467ffddef09eca972fce2519884af0c8d6d04d101da399f485163b19d061', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30667, hash: 'dfd2467ffddef09eca972fce2519884af0c8d6d04d101da399f485163b19d061', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-KEKOCPVG.css': {size: 211338, hash: 'gJFCmeY+39c', text: () => import('./assets-chunks/styles-KEKOCPVG_css.mjs').then(m => m.default)}
  },
};
