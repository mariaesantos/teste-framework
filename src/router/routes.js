
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'postagens', name: 'postagens', component: () => import('pages/Postagens.vue') },
      { path: 'albuns', name: 'albuns', component: () => import('pages/Albuns.vue') },
      { path: 'to-dos', name: 'to-dos', component: () => import('pages/TO-DOs.vue') },
    ]
  }
]

  // Always leave this as last one,
  // but you can also remove it
  if (process.env.MODE !== 'ssr') {
    routes.push({
      path: '*',
      component: () => import('pages/Error404.vue')
    })
  }

export default routes
