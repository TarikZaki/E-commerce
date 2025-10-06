
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
    'index.csr.html': {size: 12596, hash: '8beb92ded183026280d4651d345b1c153177673a042340d71e3f63914d69bdcf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: '15bf42b4f3a9428d120d4292c793a03bc5e048a17d80cf1e684a80f7d699db6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31456, hash: 'cf144e6f7342d20543831bdd896eb6c2d606394213d6857b89603703c63e4aa2', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30691, hash: 'b3cc84fd588251ae349374efd828a545cc034ef54ce18dbc36ae426542a684ba', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30638, hash: '745dbf5e077acd0274d18e8c2a762fb6915c09e82c511b22434569824b26a821', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30639, hash: '02a249ca00cdc1bb557af991f1cb69e014ecbc466c1f69ff0ba3498cdf1d7ee6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30638, hash: '745dbf5e077acd0274d18e8c2a762fb6915c09e82c511b22434569824b26a821', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30638, hash: '745dbf5e077acd0274d18e8c2a762fb6915c09e82c511b22434569824b26a821', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30638, hash: '745dbf5e077acd0274d18e8c2a762fb6915c09e82c511b22434569824b26a821', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30639, hash: '02a249ca00cdc1bb557af991f1cb69e014ecbc466c1f69ff0ba3498cdf1d7ee6', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32683, hash: '5d9732b2932c089baf30637df00af4f69202ce168ab947da8b5011ae0b9d2302', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'styles-JJJOFU5L.css': {size: 209470, hash: 'IMcknvJEQD8', text: () => import('./assets-chunks/styles-JJJOFU5L_css.mjs').then(m => m.default)}
  },
};
