
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
    'index.csr.html': {size: 12596, hash: 'b3a2b1862fd87219732cb13cad99b24e34b5c92c35a9526a678ccbb8e0976705', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: 'e15467d7aea0512fe54e0758cdb0e36bd99766f26bca6428901796e2a38f129d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30637, hash: '6121b7a1473bfcaccad14a6fa2a4768e05c187be3646daa854599a7db1bab01d', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30637, hash: '6121b7a1473bfcaccad14a6fa2a4768e05c187be3646daa854599a7db1bab01d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31455, hash: 'e33b95778ef8e981395cd0856c5ef9862a21f13b6fd31e5e36fe75d3105605d3', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30690, hash: '8d3ee5e7d9aea32bf2695237745ce749fd37532721a75b29b5479126acfa40d0', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30637, hash: '6121b7a1473bfcaccad14a6fa2a4768e05c187be3646daa854599a7db1bab01d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30637, hash: '6121b7a1473bfcaccad14a6fa2a4768e05c187be3646daa854599a7db1bab01d', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30637, hash: '6121b7a1473bfcaccad14a6fa2a4768e05c187be3646daa854599a7db1bab01d', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32682, hash: 'a240c8473f7ec9804fa4270a27ae689c4e79a4083427ffaa019827d9c85ac117', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30637, hash: '6121b7a1473bfcaccad14a6fa2a4768e05c187be3646daa854599a7db1bab01d', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-JJJOFU5L.css': {size: 209470, hash: 'IMcknvJEQD8', text: () => import('./assets-chunks/styles-JJJOFU5L_css.mjs').then(m => m.default)}
  },
};
