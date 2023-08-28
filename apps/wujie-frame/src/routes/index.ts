import { Outlet } from 'react-router-dom'
export default [
  {
    path: '/',
    name: 'root',
    component: 'main',
    children: [
      {
        path: '',
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
        component: 'outlet',
        children: [
          {
            path: '',
            name: '副应用',
            component: 'subapp',
          },
          {
            path: ':path',
            name: '副应用',
            component: 'subapp',
          }
        ]
      },

    ]
  },

];
