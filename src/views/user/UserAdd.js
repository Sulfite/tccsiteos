import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { UserAddEdt } from '../../components/AddEdt/AddEdtUser'
import { useNavigate } from 'react-router-dom';

const UserAdd = () => {
  const navigate = useNavigate();

  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Cadastro de Usuário</strong>
          </CCardHeader>
          <UserAddEdt type={2} />
      </CCard>
        </CCol>
      </CRow>
  )
}

export default UserAdd
