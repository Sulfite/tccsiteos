import React, { useEffect, useState } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilCalendar, cilLockLocked, cilUser } from '@coreui/icons'
import { reqInsertUserCustomer } from '../../../api/userApi'
import { isNUllorEmpty } from '../../../_ultils/Ultils'
import { useNavigate } from 'react-router-dom'
import { UserAddEdt } from '../../../components/AddEdt/AddEdtUser'

const Register = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardHeader>
                <h1>Register</h1>
                <p className="text-body-secondary">Crie sua conta</p>
              </CCardHeader>
              <UserAddEdt type={1} />
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
