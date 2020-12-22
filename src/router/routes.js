const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Inicio/Index.vue") }]
  },

  {
    path: "/contato",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Contato/Index.vue") }]
  },

  {
    path: "/o-que-oferecemos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Servicos/Index.vue") }
    ]
  },

  {
    path: "/quem-somos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: '', component: () => import('pages/Servicos/Index.vue') },
      { path: '/o-que-oferecemos/:slug', component: () => import('pages/Exame/Index.vue') },
    ]
  },

  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Blog/Index.vue") }]
  },
  {
    path: "/saude-da-mulher",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SaudeMulher/Index.vue") }]
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
