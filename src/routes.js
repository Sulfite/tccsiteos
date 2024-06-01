import React from 'react'

const UserAdd = React.lazy(() => import('./views/user/UserAdd'))
const UserEdt = React.lazy(() => import('./views/user/UserEdt'))
const UsersList = React.lazy(() => import('./views/user/UsersList'))

const ProductAdd = React.lazy(() => import('./views/product/ProductAdd'))
const ProductEdt = React.lazy(() => import('./views/product/ProductEdt'))
const ProductList = React.lazy(() => import('./views/product/ProductList'))

const EquipmentAdd = React.lazy(() => import('./views/equipment/EquipamentAdd'))
const EquipmentEdt = React.lazy(() => import('./views/equipment/EquipamentEdt'))
const EquipmentList = React.lazy(() => import('./views/equipment/EquipamentList'))

const TypeEquipmentAdd = React.lazy(() => import('./views/equipment/TypeEquipamentAdd'))
const TypeEquipmentEdt = React.lazy(() => import('./views/equipment/TypeEquipamentEdt'))
const TypeEquipmentList = React.lazy(() => import('./views/equipment/TypeEquipamentList'))

const TypeServiceAdd = React.lazy(() => import('./views/services/ServiceAdd'))
const TypeServiceEdt = React.lazy(() => import('./views/services/ServiceEdt'))
const TypeServiceList = React.lazy(() => import('./views/services/ServiceList'))


const osAdd = React.lazy(() => import('./views/serviceOrders/ServiceOrderAdd'))
const osEdt = React.lazy(() => import('./views/serviceOrders/ServiceOrderEdt'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  { path:'/user/userAdd', name: 'Cadastro Usuário', element: UserAdd },
  { path:'/user/userEdt/:id', name: 'Editar Usuário', element: UserEdt },
  { path:'/user/listUsers', name: 'Lista de Usuários', element: UsersList },
  
  { path:'/product/productAdd', name: 'Cadastro Produto', element: ProductAdd },
  { path:'/product/productEdt/:id', name: 'Editar Produto', element: ProductEdt },
  { path:'/product/listProduct', name: 'Lista de Produtos', element: ProductList },

  { path:'/equipment/equipmentAdd', name: 'Cadastro Equipamento', element: EquipmentAdd },
  { path:'/equipment/equipmentEdt/:id', name: 'Editar Equipamento', element: EquipmentEdt },
  { path:'/equipment/listEquipment', name: 'Lista de Equipamentos', element: EquipmentList },

  { path:'/equipment/typeEquipmentAdd', name: 'Cadastro Tipo Equipamento', element: TypeEquipmentAdd },
  { path:'/equipment/typeEquipmentEdt/:id', name: 'Editar Tipo Equipamento', element: TypeEquipmentEdt },
  { path:'/equipment/listTypeEquipment', name: 'Lista Tipos Equipamentos', element: TypeEquipmentList },

  { path:'/services/serviceAdd', name: 'Cadastro Serviço', element: TypeServiceAdd },
  { path:'/services/serviceEdt/:id', name: 'Editar Serviço', element: TypeServiceEdt },
  { path:'/services/listServices', name: 'Lista de Serviços', element: TypeServiceList },

  { path:'/os/osAdd', name: 'Cadastro Ordem de Serviço', element: osAdd },
  { path:'/os/osEdt/:id', name: 'Editar Ordem de Serviço', element: osEdt },
]

export default routes
