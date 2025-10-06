
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
    'index.csr.html': {size: 12596, hash: '949cb3e695b5a49e73b5249b46fbfabc63e4746e931cb1bd5a0b42b7e26145b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: '9082035329f1e0b7958f457764e97922d26bc160399cb76f57e5c0275d14b903', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31463, hash: '42411e87d08d4c73f2b631b6eeb907480f73d686d99e02a67f0edd858f613a19', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30698, hash: 'e2fab39be52a0f344e6dcfb56afbf78a93ce4264f6baeb2e529c42d9d3fc2cf7', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30645, hash: '6230b82c450d89cacbb8f31e9adb6b1047c04c89edd13a0ade731ccad2eb5584', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30646, hash: 'f2da92196eeea46d61f6181f96773294e82327becd63b7e6a7af4380621722d7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30646, hash: 'f2da92196eeea46d61f6181f96773294e82327becd63b7e6a7af4380621722d7', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30645, hash: '6230b82c450d89cacbb8f31e9adb6b1047c04c89edd13a0ade731ccad2eb5584', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32690, hash: 'c88e11bf4d8f56c1f3a60465305125c2c1f459f55c009530b94353253978fee8', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30645, hash: '6230b82c450d89cacbb8f31e9adb6b1047c04c89edd13a0ade731ccad2eb5584', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30646, hash: 'f2da92196eeea46d61f6181f96773294e82327becd63b7e6a7af4380621722d7', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-JJJOFU5L.css': {size: 209470, hash: 'IMcknvJEQD8', text: () => import('./assets-chunks/styles-JJJOFU5L_css.mjs').then(m => m.default)}
  },
};
