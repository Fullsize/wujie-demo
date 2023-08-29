export default [
  {
    path: '/',
    name: '首页',
    component: 'home',
    children: [
      , {
        path: ':path',
        name: 'children',
        component: 'home',
      },]
  },


];
