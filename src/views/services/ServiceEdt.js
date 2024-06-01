import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { ServiceAddEdt } from '../../components/AddEdt/AddEdtService';

const ServiceEdt = () => {
  let { id } = useParams();

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
