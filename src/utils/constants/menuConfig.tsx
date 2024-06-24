import type { MenuConfig } from 'alurkerja-ui'
import { LayoutDashboard } from 'lucide-react'

export const menuConfig: MenuConfig[] = [
  {
    href: '/menu',
    label: 'Menu 1',
    icon: <LayoutDashboard />,
    child: [
      { href: '/menu/sub-menu-1', label: 'Sub Menu 1' },
      { href: '/menu/sub-menu-2', label: 'Sub Menu 2' },
    ],
  },
]
