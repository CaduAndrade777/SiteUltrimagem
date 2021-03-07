const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Inicio/Index.vue") },
      { path: "/contato", component: () => import("pages/Contato/Index.vue") },
      { path: "/quem-somos", component: () => import("pages/QuemSomos/Index.vue") },
      { path: "/blog", component: () => import("pages/Blog/Index.vue") },
      { path: "/saude-da-mulher", component: () => import("pages/SaudeMulher/Index.vue") },
      { path: "/medicina-fetal", component: () => import("pages/MedicinaFetal/Index.vue") },
    ]
  },
  {
    path: "/exames-e-convenios",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: '', component: () => import('pages/Servicos/Index.vue') },
      { path: '/exames-e-convenios/:slug', component: () => import('pages/Exame/Index.vue') },
    ]
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
