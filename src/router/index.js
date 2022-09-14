import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: '/dashoard',
    name: 'dashoard',
    component: () => import(/* webpackChunkName: "dashoard" */ '../views/DashboardView.vue')
   },
   {
    path: '/vendedores',
    name: 'vendedores',
    component: () => import(/* webpackChunkName: "vendedores" */ '../views/VendedoresView.vue')
   },
   {
    path: '/ficha-vendedores',
    name: 'padre-vendedores',
    component: () => import(/* webpackChunkName: "padre-vendedores" */ '../views/PadreVendedores.vue'),
    children: [
      {
        path: '',
        name: 'ficha-vendedores',
        component: () => import(/* webpackChunkName: "ficha_vendedores" */ '../components/ficha vendedores/FichaVendedores.vue')
      },
      {
        path:'',
        name: 'carta cliente',
        component: () => import(/* webpackChunkName: "carta cliente" */ '../components/ficha vendedores/CarteraCliente.vue')
      },
      {
        path:'',
        name: 'cumplimiento',
        component: () => import(/* webpackChunkName: "cumplimiento" */ '../components/ficha vendedores/Cumplimiento.vue')
      }
    ]
   },
   {
    path: '/:catchAll(.*)',
    name: '/Error404',
    component: () => import(/* webpackChunKName: "Error404" */ '../views/Error404.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
