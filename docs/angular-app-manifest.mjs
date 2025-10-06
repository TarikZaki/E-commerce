
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
    'index.csr.html': {size: 12596, hash: '8005fd817daecb3d988578341874d26a02d4ee54575903fdd02a9be1887a7c82', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: '893f54a51fb71a0d127f88e9e788716b57bb463f95fc72ba00893e9cf121dc22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30691, hash: '453dd108db09fa8a5f0eb47d2cb69adc44e45b4dea63b5090e1c2953744dae28', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30638, hash: '977c78c27e4b00dafd35be0542b6e1ff1215dd8946697493384d180a675f430a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30638, hash: '977c78c27e4b00dafd35be0542b6e1ff1215dd8946697493384d180a675f430a', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31456, hash: '3cdb06f8835c0eceaffcf0610ea29844684a76b3bfd01f6319985810856ce30a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30638, hash: '977c78c27e4b00dafd35be0542b6e1ff1215dd8946697493384d180a675f430a', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30638, hash: '977c78c27e4b00dafd35be0542b6e1ff1215dd8946697493384d180a675f430a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30639, hash: 'a808916ac5fcba53628eb0e7516b0c04549c7929c6a9a785bb8e1ac102163704', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32683, hash: '4e9012ca8088aec7208de8a3e8a02a0e89f61d91b4187c99cfb3e5d26e238e08', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30638, hash: '977c78c27e4b00dafd35be0542b6e1ff1215dd8946697493384d180a675f430a', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-BK6YL53G.css': {size: 207004, hash: '9ezzNBSJjSw', text: () => import('./assets-chunks/styles-BK6YL53G_css.mjs').then(m => m.default)}
  },
};
