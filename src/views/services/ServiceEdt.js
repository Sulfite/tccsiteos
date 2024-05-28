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

import { isAuthenticated } from '../../components/auth/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { ServiceAddEdt } from '../../components/AddEdt/AddEdtService';

const ServiceEdt = () => {
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
            <strong>Editar Serviços</strong>
          </CCardHeader>
          <ServiceAddEdt type={2} idTypeService={id} />
        </CCard>
      </CCol>
    </CRow>)
}

export default ServiceEdt
