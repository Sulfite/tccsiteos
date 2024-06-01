import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { ServiceOrderAddEdt } from '../../components/AddEdt/AddEdtServiceOrder'

const ServiceOrderAdd = () => {
  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Cadastrar Ordem de Serviço</strong>
          </CCardHeader>
          <ServiceOrderAddEdt type={1} />
      </CCard>
        </CCol>
      </CRow>
  )
}

export default ServiceOrderAdd;