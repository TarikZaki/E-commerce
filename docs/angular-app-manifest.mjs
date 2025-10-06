
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
    'index.csr.html': {size: 12596, hash: '4c1a374de514f4a707828ebb5d1e2b4bf35ef1a5145a411c158fc5e7f0de0534', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: '3fb1f0b4848d42cbda708fdbabb1990f75b81be5b16b8bbe17b31950e081588c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30631, hash: '203875803c2e8627f0cd63577406e41627abb444e8a7313eff71116d46991e6b', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31449, hash: 'cc018c9895a59324a60585f1b01876069e28809a78f93cd4854d0e282538c159', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30684, hash: '799a03d8d20232f72b65bff9e706c379ecad0f2747f2324283f29090e6f815cd', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30631, hash: '203875803c2e8627f0cd63577406e41627abb444e8a7313eff71116d46991e6b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30631, hash: '203875803c2e8627f0cd63577406e41627abb444e8a7313eff71116d46991e6b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32676, hash: '5d466659f0615df20190b41db4e32a145ea6bbe7a9c5992a6edfd88185b710d6', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30632, hash: 'f7b5ce894bdc45d358e63d956bf1474ee77fc7312e9b539abfaf60478bb7c08b', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30631, hash: '203875803c2e8627f0cd63577406e41627abb444e8a7313eff71116d46991e6b', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30631, hash: '203875803c2e8627f0cd63577406e41627abb444e8a7313eff71116d46991e6b', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-JJJOFU5L.css': {size: 209470, hash: 'IMcknvJEQD8', text: () => import('./assets-chunks/styles-JJJOFU5L_css.mjs').then(m => m.default)}
  },
};
