import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { ServiceAddEdt } from '../../components/AddEdt/AddEdtService';

const ServiceAdd = () => {
  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Cadastro de Serviços</strong>
          </CCardHeader>
          <ServiceAddEdt type={1} />
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ServiceAdd