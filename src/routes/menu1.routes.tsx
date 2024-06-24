import { RouteObject } from 'react-router-dom'

import { SubMenu1, SubMenu2 } from '@/pages/menus'

const articleRoutes: RouteObject[] = [
  {
    path: '/menu/sub-menu-1',
    element: <SubMenu1 />,
  },
  {
    path: '/menu/sub-menu-2',
    element: <SubMenu2 />,
  },
]
export default articleRoutes
