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
import { UserAddEdt } from '../../components/AddEdt/AddEdtUser'
import { isAuthenticated } from '../../components/auth/auth';
import { useNavigate } from 'react-router-dom';
import { ProductAddEdt } from '../../components/AddEdt/AddEdtProduct';

const ProductAdd = () => {
  const navigate = useNavigate();

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
            <strong>Cadastro de Produto</strong>
          </CCardHeader>
          <ProductAddEdt type={1} />
        </CCard>
      </CCol>
    </CRow>)
}

export default ProductAdd
