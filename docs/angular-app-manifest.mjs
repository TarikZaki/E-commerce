
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
      "chunk-3E2FRGCN.js"
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
    'index.csr.html': {size: 12632, hash: 'cda76093a36ad1dcd6bf66b0809618ee681cce805df0adf8fb9434fbd7afd963', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: '82c055fa56522104591c7340f704f1771997685acc51222d81364cb28e95341a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30648, hash: '11f1a981db40c2758af588c7f51f76c1418d6a2c6bf1f44943109710f7561217', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31466, hash: '87bf92ca71d3d6e65071898ef09db04a28db34273775696fa543321da006e288', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 30701, hash: '4054827c9d71d2e622b1cbf0294b2fd9998a0f81e063a2ddcf4c82c988c27943', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'forgot/index.html': {size: 32693, hash: '62433c44bed4b9c52ebacac092d7717df99313cd0ac4e4b0015be5ebaa158dcd', text: () => import('./assets-chunks/forgot_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 30649, hash: '62dd3498c245a132894f0eec2861ffc661eb4f3b87ea122deeb777f426a8c9b2', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30648, hash: '11f1a981db40c2758af588c7f51f76c1418d6a2c6bf1f44943109710f7561217', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 30649, hash: '62dd3498c245a132894f0eec2861ffc661eb4f3b87ea122deeb777f426a8c9b2', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 30648, hash: '11f1a981db40c2758af588c7f51f76c1418d6a2c6bf1f44943109710f7561217', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 30648, hash: '11f1a981db40c2758af588c7f51f76c1418d6a2c6bf1f44943109710f7561217', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'styles-Y23KSAJE.css': {size: 211406, hash: '/MGrWFRb9bo', text: () => import('./assets-chunks/styles-Y23KSAJE_css.mjs').then(m => m.default)}
  },
};
