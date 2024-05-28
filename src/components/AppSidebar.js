import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CButton,
  CCloseButton,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// import { logo } from 'src/assets/brand/logo'
// import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'
import UserActionsTypes from '../redux/User/actionTypes'
import { useNavigate } from 'react-router-dom'
import { cilExitToApp } from '@coreui/icons'

const AppSidebar = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const currentUser = useSelector((state) => state.userReducer.currentUser)

  const handlerClickLogout = () => {
    dispatch({
      type: UserActionsTypes.LOGOUT,
    })
    dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
    nav('/Login')
  }

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand className="headerSidebar">

        <h1>Minhas O.S</h1>

          {/* <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />  */}
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex buttonEnd">
        <CButton onClick={handlerClickLogout}>
          <CIcon icon={cilExitToApp} />
        </CButton>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
