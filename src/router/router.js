import asyncComponent from './asyncComponent';
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

const routes = [
  {
    component: asyncComponent(() => import('../App')),
    routes: [
      {
        path: '/',
        exact: true, //只有当路由完全匹配的时候才进行匹配
        component: asyncComponent(() => import('../view/Home')),
      },
      {
        path: '/About',
        component: asyncComponent(() => import('../view/About')),
      },
      {
        path: '/Inbox',
        exact: true, //只有当路由完全匹配的时候才进行匹配
        component: asyncComponent(() => import('../view/Inbox')),
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
