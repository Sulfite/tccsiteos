import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCarAlt,
  cilInbox,
  cilList,
  cilPlus,
  cilSettings,
  cilSpeedometer,
  cilUser,
  cilUserPlus,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    typeAccess: 1,
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  // typeAccess 1
  {
    component: CNavGroup,
    name: 'Usuários',
    to: '/user',
    typeAccess: 1,
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon:<CIcon icon={cilList} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Lista',
        to: '/user/listUsers',
      },
      {
        component: CNavItem,
        icon:<CIcon icon={cilUserPlus} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Cadastro',
        to: '/user/userAdd',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Produtos',
    to: '/product',
    typeAccess: 1,
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon:<CIcon icon={cilList} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Lista',
        to: '/product/listProduct',
      },
      {
        component: CNavItem,
        icon:<CIcon icon={cilPlus} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Cadastro',
        to: '/product/productAdd',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Equipamentos',
    to: '/equipment',
    typeAccess: 1,
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon:<CIcon icon={cilList} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Lista Tipo Equipamento',
        to: '/equipment/listTypeEquipment',
      },
      {
        component: CNavItem,
        icon:<CIcon icon={cilPlus} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Cadastro Tipo Equipamento',
        to: '/equipment/typeEquipmentAdd',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Serviços',
    to: '/service',
    typeAccess: 1,
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon:<CIcon icon={cilList} customClassName="nav-icon" />,
        name: 'Lista',
        typeAccess: 1,
        to: '/services/listServices',
      },
      {
        component: CNavItem,
        icon:<CIcon icon={cilPlus} customClassName="nav-icon" />,
        typeAccess: 1,
        name: 'Cadastro',
        to: '/services/serviceAdd',
      },
    ],
  },

  // typeAccess 2
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    typeAccess: 2,
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Usuários',
    to: '/user',
    typeAccess: 2,
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon:<CIcon icon={cilList} customClassName="nav-icon" />,
        typeAccess: 2,
        name: 'Lista',
        to: '/user/listUsers',
      },
      {
        component: CNavItem,
        icon:<CIcon icon={cilUserPlus} customClassName="nav-icon" />,
        typeAccess: 2,
        name: 'Cadastro',
        to: '/user/userAdd',
      },
    ],
  },

  // typeAccess 3
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    typeAccess: 3,
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Equipamentos',
    to: '/equipment',
    typeAccess: 3,
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon:<CIcon icon={cilList} customClassName="nav-icon" />,
        typeAccess: 3,
        name: 'Lista Equipamentos',
        to: '/equipment/listEquipment',
      },
      {
        component: CNavItem,
        icon:<CIcon icon={cilPlus} customClassName="nav-icon" />,
        typeAccess: 3,
        name: 'Cadastro Equipamento',
        to: '/equipment/equipmentAdd',
      },
    ],
  },
]

export default _nav
