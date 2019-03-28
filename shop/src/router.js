import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Class from './views/Class.vue'
import Shopcar from './views/ShopCar.vue'
import Mine from './views/Mine.vue'
// let Home = ()=> import('./views/Home.vue');
// let Class = ()=> import('./views/Class.vue');
// let Shopcar = ()=> import('./views/ShopCar.vue');
// let Mine = ()=> import('./views/Mine.vue');
// import Ajax from './views/Ajax.vue'
import Detail from './views/Detail.vue'
import FooterBar from "./components/FooterBar"
import Error from './views/Error.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'footerbar':FooterBar
      },
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/class',
      name: 'class',
      components: {
        default: Class,
        'footerbar':FooterBar
      },
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      components: {
        default: Shopcar,
        'footerbar':FooterBar
      },
      meta:{
        keepAlive: false
      }
    },
    {
       path: '/mine',
       name: 'mine', 
       components: {
        default: Mine,
        'footerbar':FooterBar
      },
      meta:{
        keepAlive: false
      }
    },
    // {
    //   path: '/ajax',
    //   name: 'ajax',
    //   component: Ajax
    // },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '*',
      component: Error
    }
  ]
})
