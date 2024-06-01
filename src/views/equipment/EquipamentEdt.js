import React from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import { useParams } from 'react-router-dom';
import { EquipmentAddEdt } from '../../components/AddEdt/AddEdtEquipament';

const EquipamentEdt = () => {
  let { id } = useParams();
  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Editar Equipamento</strong>
          </CCardHeader>
          <EquipmentAddEdt type={2} idEquipment={id} />
        </CCard>
      </CCol>
    </CRow>)
}

export default EquipamentEdt