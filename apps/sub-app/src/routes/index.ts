export default [
  {
    path: '/',
    name: '首页',
    component: 'outlet',
    children: [
      {
        path: '',
        name: 'children',
        component: 'home',
      },
      {
        path: ':path',
        name: 'children',
        component: 'home',
      },
    ]
  },


];
