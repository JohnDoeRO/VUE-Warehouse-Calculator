import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import RouteCalc from '@/components/Route'
import ProductId from '@/components/ProductId'
import ProductBin from '@/components/ProductBin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/route',
      name: 'routeCalc',
      component: RouteCalc
    },
    {
      path: '/product-id/:product_id',
      name: 'productId',
      component: ProductId
    },
    {
      path: '/product-bin/:position',
      name: 'productBin',
      component: ProductBin
    },
  ]
})
