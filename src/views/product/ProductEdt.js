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
import { useNavigate, useParams } from 'react-router-dom';
import { ProductAddEdt } from '../../components/AddEdt/AddEdtProduct';

const ProductEdt = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  console.log(id);

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
          <ProductAddEdt type={2} idProduct={id} />
        </CCard>
      </CCol>
    </CRow>)
}

export default ProductEdt
