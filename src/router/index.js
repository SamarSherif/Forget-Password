import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn.vue'
import ForgetPass from '@/components/ForgetPass.vue'
import NewPass from '@/components/NewPass.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/forgetpassword',
      name: 'ForgetPass',
      component: ForgetPass
    },
    {
      path: '/newpassword',
      name: 'NewPass',
      component: NewPass
    }
  ]
})
