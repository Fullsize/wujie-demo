export default [
  {
    path: '/',
    name: '首页',
    component: 'home',
  },
  {
    path: '/a',
    name: '1',
    component: 'a',
  },
  {
    path: '/subapp',
    name: '副应用',
    component: 'subapp',
  },
  {
    path: '/subapp/:path',
    name: '副应用',
    component: 'subapp',
  }
];
