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

import { useNavigate } from 'react-router-dom'
import { isNUllorEmpty } from '../../_ultils/Ultils'
import { reqGetTypeService, reqInsertTypeService, reqPutTypeService } from '../../api/serviceApi'

export const ServiceAddEdt = (props) => {
	// type 
	// 1 = Insert 
	// 2 = Update

  const initialForm = {
    nameTypeService: '',
    price: ''
  }

  const nav = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [visible, setVisible] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const [validated, setValidated] = useState(false)
  const [mensageError, setMensageError] = useState('');

  useEffect(() => {
    if (props.type === 2) {
      const InformationProduct = reqGetTypeService(props.idTypeService);

      InformationProduct.then((response) => {
        initialForm.nameTypeService = response.Name_Type_Service;
        initialForm.price = (isNUllorEmpty(response.Price) ? '' : response.Price);
        setForm((form) => ({ ...form, ...initialForm }));
      });
	  } else {
			initialForm.nameTypeService = '';
			initialForm.price = '';
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

    const dataNewTypeService = {
      nameTypeService: form.nameTypeService,
      price: form.price
    }

    if (props.type === 1) {
      let returnInsert = await reqInsertTypeService(dataNewTypeService)
      if (returnInsert.insert === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/services/listServices')
        }, 3000)
      }
    } else {
      let returnUpdateProduct = await reqPutTypeService(dataNewTypeService, props.idTypeService)
      if (returnUpdateProduct.update === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/services/listServices')
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
            placeholder="Nome do Produto"
            value={form.nameTypeService}
            onChange={(e) => setInput({ nameTypeService: e.target.value })}
            feedbackInvalid="Por favor insera o nome do serviço."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          <CFormInput
            type="number"
            placeholder="Preço"
            value={form.price}
            onChange={(e) => setInput({ price: e.target.value })}
            feedbackInvalid="Por favor insira o preço."
            required
          />
        </CInputGroup>
        <div className="d-grid">
          <CButton type="submit" color="success">
            {props.type === 1 ? 'Adicionar Serviço' : ''}
            {props.type === 2 ? 'Alterar Serviço' : ''}
          </CButton>
        </div>
      </CForm>
    </CCardBody>
  )
}

// export default AddEdtUser
