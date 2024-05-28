import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '../../components/auth/auth';
import { TypeEquipamentAddEdt } from '../../components/AddEdt/AddEdtTypeEquipment';

const TypeEquipamentEdt = () => {
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
            <strong>Editar Produto</strong>
          </CCardHeader>
          <TypeEquipamentAddEdt type={2} idTypeEquipment={id} />
        </CCard>
      </CCol>
    </CRow>)
}

export default TypeEquipamentEdt