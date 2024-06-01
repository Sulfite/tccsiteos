import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import { useNavigate, useParams } from 'react-router-dom';
import { TypeEquipamentAddEdt } from '../../components/AddEdt/AddEdtTypeEquipment';

const TypeEquipamentEdt = () => {
  let { id } = useParams();
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