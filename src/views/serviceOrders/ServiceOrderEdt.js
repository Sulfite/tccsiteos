import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'
import { ServiceOrderAddEdt } from '../../components/AddEdt/AddEdtServiceOrder'
import { useParams } from 'react-router-dom'

const ServiceOrderEdt = () => {
  let { id } = useParams()
  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Editar Ordem de Serviço</strong>
          </CCardHeader>
          <ServiceOrderAddEdt type={2} idOs={id} />
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ServiceOrderEdt