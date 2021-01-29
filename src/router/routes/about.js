export default [
  {
    path: '/about',
    name: 'about',
    meta: { layout: 'default' },
    component: () =>
      import(/* webpackChunkName: "about" */ '@/components/About.vue'),
  },
]
