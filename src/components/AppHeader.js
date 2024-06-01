import React, { useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CNavLink,
  CNavItem,
  useColorModes,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilExitToApp,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import UserActionsTypes from '../redux/User/actionTypes'

const AppHeader = () => {
  const headerRef = useRef()
  const navigate = useNavigate()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const currentUser = useSelector((state) => state.userReducer.currentUser)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  const handlerClickLogout = () => {
    dispatch({
      type: UserActionsTypes.LOGOUT,
    })
    return navigate('/Login');
  }

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <h4>Bem-vindo, {currentUser.name}! </h4>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
        <CNavItem>
            <CNavLink to="/dashboard" as={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CButton onClick={handlerClickLogout}>
              <CIcon icon={cilExitToApp} />
            </CButton>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader