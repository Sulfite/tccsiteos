import React, { useEffect, useState } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilCalendar, cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { reqGetProduct, reqInsertProduct, reqPutProduct } from '../../api/productApi'
import { isNUllorEmpty } from '../../_ultils/Ultils'
import { reqGetTypeEquipment, reqInsertTypeEquipment, reqPutTypeEquipment } from '../../api/equipamentApi'

export const TypeEquipamentAddEdt = (props) => {
	// type 
	// 1 = Insert 
	// 2 = Update

  const initialForm = {
    nameTypeEquipment: ''
  }

  const nav = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [visible, setVisible] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const [validated, setValidated] = useState(false)
  const [mensageError, setMensageError] = useState('');

  useEffect(() => {
    if (props.type === 2) {
      const InformationProduct = reqGetTypeEquipment(props.idTypeEquipment);

      InformationProduct.then((response) => {
        initialForm.nameTypeEquipment = response.Name_Type_Equipment;
        setForm((form) => ({ ...form, ...initialForm }));
      });
	  } else {
			initialForm.nameTypeEquipment = '';
	  }
  }, [])

  const handleSubmit = async (event) => {
    setVisible(false)
    setVisibleSuccess(false)
    const getForm = event.currentTarget
    if (getForm.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    const dataNewTypeEquipment = {
      nameTypeEquipment: form.nameTypeEquipment
    }

    if (props.type === 1) {
      let returnInsert = await reqInsertTypeEquipment(dataNewTypeEquipment)
      if (returnInsert.insert === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/equipment/listTypeEquipment')
        }, 3000)
      }
    } else {
      let returnUpdateTypeEquipment = await reqPutTypeEquipment(dataNewTypeEquipment, props.idTypeEquipment)
      if (returnUpdateTypeEquipment.update === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/equipment/listTypeEquipment')
        }, 3000)
      }
    }
  }

  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }))
  }

  return (
    <CCardBody className="p-4">
      {visible === true ? <CAlert color="danger">{mensageError}</CAlert> : ''}
      {visibleSuccess === true ? (
        <CAlert color="success">Cadastro realizado com sucesso!</CAlert>
      ) : (
        ''
      )}

      <CForm
        className="needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CInputGroup className="mb-3">
          <CFormInput
            placeholder="Nome do Tipo de Equipamento"
            value={form.nameTypeEquipment}
            onChange={(e) => setInput({ nameTypeEquipment: e.target.value })}
            feedbackInvalid="Por favor insera o nome do tipo do equipamento."
            required
          />
        </CInputGroup>
        <div className="d-grid">
          <CButton type="submit" color="success">
            {props.type === 1 ? 'Adicionar Tipo Equipamento' : ''}
            {props.type === 2 ? 'Alterar Tipo Equipamento' : ''}
          </CButton>
        </div>
      </CForm>
    </CCardBody>
  )
}