export default [
  {
    path: '/',
    name: 'landing',
    meta: { layout: 'default' },
    component: () =>
      import(/* webpackChunkName: "landing" */ '@/components/Landing.vue'),
  },
]
