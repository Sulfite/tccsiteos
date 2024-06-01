import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import { useNavigate } from 'react-router-dom';
import { TypeEquipamentAddEdt } from '../../components/AddEdt/AddEdtTypeEquipment';

const TypeEquipamentAdd = () => {
  const navigate = useNavigate();

  return (
    <CRow className="justify-content-center">
      <CCol md={12} lg={12} xl={12}>
        <CCard className="mx-4">
          <CCardHeader>
            <strong>Cadastro tipo equipamentos</strong>
          </CCardHeader>
          <TypeEquipamentAddEdt type={1} />
        </CCard>
      </CCol>
    </CRow>)
}

export default TypeEquipamentAdd
