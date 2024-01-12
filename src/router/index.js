import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CareerView from '../views/CareerView.vue'
import ProductsView from '../views/CategoryDetailView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import CategoryDetailView from '../views/CategoryDetailView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import NewListingView from '../views/NewListingView.vue'
import ContactView from '../views/ContactView.vue'
import FAQView from '../views/FAQView.vue'
import ProfileSettingView from '../views/PorfileSettingView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import ManageAdsView from '../views/ManageAdsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Career',
    name: 'career',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CareerView
  },
  {
    path: '/Products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductsView
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignupView
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView
  },
  {
    path: '/CategoryDetail',
    name: 'CategoryDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CategoryDetailView
  },
  {
    path: '/ProductDetail',
    name: 'ProductDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDetailView
  },
  {
    path: '/NewListing',
    name: 'NewListing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NewListingView
  },
  {
    path: '/Contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactView
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FAQView
  },
  {
    path: '/ProfileSettings',
    name: 'ProfileSettings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProfileSettingView
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    component: EditProfileView
  },
  {
    path: '/ManageAds',
    name: 'ManageAds',
    component: ManageAdsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
