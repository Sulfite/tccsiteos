import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCarAlt,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilInbox,
  cilList,
  cilNotes,
  cilPencil,
  cilPlus,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilStar,
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
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },


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
  
  // {
  //   component: CNavGroup,
  //   name: 'Cadastros',
  //   to: '/add',
  //   icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Usuário',
  //       to: '/add/userAdd',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Produto',
  //       to: '/add/productAdd',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Serviço',
  //       to: '/add/serviceAdd',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tipo de Equipamento',
  //       to: '/add/typeEquipamentAdd',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Equipamento',
  //       to: '/add/equipamentAdd',
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
