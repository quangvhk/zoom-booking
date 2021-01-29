export default [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: () =>
      import(/* webpackChunkName: "login" */ '@/components/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { layout: 'auth' },
    component: () =>
      import(/* webpackChunkName: "signup" */ '@/components/SignUp.vue'),
  },
  {
    path: '/verify/:id',
    name: 'verify',
    meta: { layout: 'auth' },
    component: () =>
      import(/* webpackChunkName: "verify" */ '@/components/Verify.vue'),
  },
  {
    path: '/forgot',
    name: 'forgotPassword',
    meta: { layout: 'auth' },
    component: () =>
      import(
        /* webpackChunkName: "forgotPassword" */ '@/components/ForgotPassword.vue'
      ),
  },
  {
    path: '/reset/:id',
    name: 'resetPassword',
    meta: { layout: 'auth' },
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ '@/components/ResetPassword.vue'
      ),
  },
]
