export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      requiresAuth: true,
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
  },
]
