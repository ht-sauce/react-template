import React from 'react';
import loadable from 'react-loadable';
import { Spin } from 'antd';
//子路由展示的关键参数，类似router-view
//import { renderRoutes } from 'react-router-config';
// 传参示例
/*const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/!* child routes won't render without this *!/}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
);*/
const on_demand = component => {
  return loadable({
    loader: component,
    loading: () => {
      return <Spin />;
    },
    delay: 500, //0.2秒没有渲染出来则会有loading
  });
};
const routes = [
  {
    component: on_demand(() => import('../App')),
    routes: [
      {
        path: '/',
        exact: true, //只有当路由完全匹配的时候才进行匹配
        component: on_demand(() => import('../view/Home')),
      },
      {
        path: '/About',
        component: on_demand(() => import('../view/About')),
      },
      {
        path: '/Inbox',
        component: on_demand(() => import('../view/Inbox')),
      },
      // 路由嵌套示例
      /*{
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild,
          },
        ],
      },*/
    ],
  },
];

export default routes;
