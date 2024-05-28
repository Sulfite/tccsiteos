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

export const ProductAddEdt = (props) => {
	// type 
	// 1 = Insert 
	// 2 = Update

  const initialForm = {
    nameProduct: '',
    amount: '',
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
      const InformationProduct = reqGetProduct(props.idProduct);

      InformationProduct.then((response) => {
        initialForm.nameProduct = response.Name_Product;
        initialForm.amount = response.Amount;
        initialForm.price = (isNUllorEmpty(response.Priece) ? '' : response.Priece);
        setForm((form) => ({ ...form, ...initialForm }));
      });
	  } else {
			initialForm.nameProduct = '';
			initialForm.amount = '';
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

    const dataNewProduct = {
      nameProduct: form.nameProduct,
      amount: form.amount,
      price: form.price
    }

    if (props.type === 1) {
      let returnInsert = await reqInsertProduct(dataNewProduct)
      if (returnInsert.insert === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/product/listProduct')
        }, 3000)
      }
    } else {
      let returnUpdateProduct = await reqPutProduct(dataNewProduct, props.idProduct)
      if (returnUpdateProduct.update === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/product/listProduct')
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
            value={form.nameProduct}
            onChange={(e) => setInput({ nameProduct: e.target.value })}
            feedbackInvalid="Por favor insera o nome do produto."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          <CFormInput
            type="number"
            placeholder="Quantidade"
            value={form.amount}
            onChange={(e) => setInput({ amount: e.target.value })}
            feedbackInvalid="Por favor insira a quantidade."
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
            {props.type === 1 ? 'Adicionar Produto' : ''}
            {props.type === 2 ? 'Alterar Produto' : ''}
          </CButton>
        </div>
      </CForm>
    </CCardBody>
  )
}

// export default AddEdtUser
