export default [
  {
    path: '/admin/cities',
    name: 'admin-cities',
    meta: {
      requiresAuth: true,
      layout: 'default',
    },
    component: () =>
      import(
        /* webpackChunkName: "admin-cities" */ '@/components/AdminCities.vue'
      ),
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    meta: {
      requiresAuth: true,
      layout: 'default',
    },
    component: () =>
      import(
        /* webpackChunkName: "admin-users" */ '@/components/AdminUsers.vue'
      ),
  },
]
