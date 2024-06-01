import React from 'react';
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import { EquipmentAddEdt } from '../../components/AddEdt/AddEdtEquipament';

const EquipamentAdd = () => {
  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Cadastro Equipamento</strong>
          </CCardHeader>
          <EquipmentAddEdt type={1} />
        </CCard>
      </CCol>
    </CRow>)
}

export default EquipamentAdd