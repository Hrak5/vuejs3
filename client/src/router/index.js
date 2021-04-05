import Vue from 'vue'
import Router from 'vue-router'
import Profile from '../components/User/Profile'
import auth_routes from "../components/Auth/auth_routes";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name:"Login"}
    },
    ...auth_routes,
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
