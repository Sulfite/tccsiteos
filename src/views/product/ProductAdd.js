import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import { ProductAddEdt } from '../../components/AddEdt/AddEdtProduct';

const ProductAdd = () => {
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
