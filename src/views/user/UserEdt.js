import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { UserAddEdt } from '../../components/AddEdt/AddEdtUser'
import { isAuthenticated } from '../../components/auth/auth';
import { useNavigate, useParams } from 'react-router-dom';

const UserEdt = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, []);

  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Editar de Usuário</strong>
          </CCardHeader>
          <UserAddEdt type={3} idUser={id} />
      </CCard>
        </CCol>
      </CRow>
  )
}

export default UserEdt
