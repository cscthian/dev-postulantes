import { createRouter, createWebHistory } from 'vue-router'
import RegistrarPostulantePage from '@/views/RegistrarPostulantePage.vue'
import EntrevistaPage from '@/views/EntrevistaPage.vue'
import NuevoEmpleadoPageVue from '@/views/NuevoEmpleadoPage.vue'
import EmpleadosRegistradosPage from '@/views/EmpleadosRegistradosPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: RegistrarPostulantePage
  },
  {
    path: '/entrevista',
    name: 'entrevista',
    component: EntrevistaPage
  },
  {
    path: '/aprobar',
    name: 'aprobar',
    component: NuevoEmpleadoPageVue
  },
  {
    path: '/empleados',
    name: 'empleados',
    component: EmpleadosRegistradosPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
