import type { Route } from '../interfaces/Route.interface'

export const routesPages: Route[] = [
  {
    title: 'Exercises',
    prependIcon: 'mdi-xml',
    path: '/dashboard/exercises',
  },
  {
    title: 'Settings',
    prependIcon: 'mdi-cog-outline',
    path: '/dashboard/settings',
  },
  {
    title: 'Profile',
    prependIcon: 'mdi-card-account-details-outline',
    path: '/dashboard/profile',
  },
  {
    title: 'Favorites',
    prependIcon: 'mdi-cards-heart-outline',
    path: '/dashboard/favorites',
  },
  {
    title: 'Contributions',
    prependIcon: 'mdi-code-block-braces',
    path: '/dashboard/contributions',
  },
]

export type PublicRoutes = 'exercises' | 'settings'
