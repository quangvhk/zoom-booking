export default [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true,
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/components/Profile.vue'),
  },
]
