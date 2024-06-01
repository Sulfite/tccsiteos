import React, { useEffect, useState } from 'react'
import {
  CAlert,
  CButton,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilXCircle,
} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { reqListCustomers, reqListEmploye } from '../../api/userApi'
import { formatDateDB, formatDateInput, formatTime, isNUllorEmpty } from '../../_ultils/Ultils'
import { reqGetEquipments } from '../../api/equipamentApi'
import { reqGetTypesServices } from '../../api/serviceApi'
import { reqGetProducts } from '../../api/productApi'
import {
  reqGetOrderService,
  reqInsertOrderService,
  reqPutOrderService,
} from '../../api/servicesOrdersApi'
import { useSelector } from 'react-redux'

export const ServiceOrderAddEdt = (props) => {
  const initialForm = {
    dhOpening: '',
    dtOpening: '',
    hrOpening: '',
    dhClosed: null,
    dtClosed: '',
    hrClosed: '',
    detailing: '',
    observation: '',
    solution: '',
    numberCondition: '',
    idEquipment: 0,
    idUserCustomer: 0,
    idUserEmploye: 0,
    idTypeService: 0,
    products: [],
  }

  const initialFormProdut = {
    ID_Product_OS: 0,
    ID_Product: 0,
    Name_Product: '',
    Amount: 0,
    Price: 0.0,
  }

  const dataSearch = {
    name: '',
    offset: 0,
    limit: 9999,
  }

  // Type
  //  1 - Add
  //  2 - edt

  const nav = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [formProduct, setFormProduct] = useState(initialFormProdut)

  const [visible, setVisible] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleEquipment, setVisibleEquipment] = useState(false)

  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const [validated, setValidated] = useState(false)
  const [mensageError, setMensageError] = useState('')

  const initialOptionsEquipments = [{ label: 'Selecione um Veiculo', value: '' }]
  const [optionsIdEquipment, setOptionsIdEquipment] = useState(initialOptionsEquipments)

  const initialOptionsIdUserEmploye = [{ label: 'Selecione o Funcionário', value: '' }]
  const [optionsIdUserEmploye, setOptionsIdUserEmploye] = useState(initialOptionsIdUserEmploye)

  const initialOptionsIdUserCustomer = [{ label: 'Selecione o Cliente', value: '' }]
  const [optionsIdUserCustomer, setOptionsIdUserCustomer] = useState(initialOptionsIdUserCustomer)

  const initialOptionsIdTypeService = [{ label: 'Selecione o Serviço', value: '', price: 0.0 }]
  const [optionsIdTypeService, setOptionsIdTypeService] = useState(initialOptionsIdTypeService)

  const initialOptionsProducts = [{ label: 'Selecione um Produto', value: '', price: 0.0 }]
  const [optionsProduct, setOptionsProduct] = useState(initialOptionsProducts)
  const [productsAdd, setProductsAdd] = useState([])
  
  const [readonly, setReadOnly] = useState(false)
  const currentUser = useSelector((state) => state.userReducer.currentUser)  
  const [typeAccessP, setTypeAccessP] = useState(currentUser.accessType)

  useEffect(() => {
    const returnListTypesServices = reqGetTypesServices()
    returnListTypesServices.then((response) => {
      const newArray = response.map((value) => {
        return { label: value.Name_Type_Service, value: value.ID_Type_Service, price: value.Price }
      })
      setOptionsIdTypeService([...initialOptionsIdTypeService, ...newArray])
    })

    const returnListCustomer = reqListCustomers()
    returnListCustomer.then((response) => {
      const newArray = response.map((value) => {
        return { label: value.Name_User, value: value.ID_User }
      })
      setOptionsIdUserCustomer([...initialOptionsIdUserCustomer, ...newArray])
    })

    if (typeAccessP === 1) {
      const returnListEmployees = reqListEmploye()
      returnListEmployees.then((response) => {
        const newArray = response.map((value) => {
          return { label: value.Name_User, value: value.ID_User }
        })
        setOptionsIdUserEmploye([...initialOptionsIdUserEmploye, ...newArray])
      })
    }

    const returnListProducts = reqGetProducts(dataSearch)
    returnListProducts.then((response) => {
      const newArray = response.map((value) => {
        return { label: value.Name_Product, value: value.ID_Product, price: value.Priece }
      })
      setOptionsProduct([...initialOptionsProducts, ...newArray])
    })

    if (props.type === 2) {
      const InformationOs = reqGetOrderService(props.idOs)

      InformationOs.then((response) => {
        if (typeAccessP === 1) {
          setReadOnly(false)
        } else if (typeAccessP === 3 || !isNUllorEmpty(response.DH_Closed)) {
          setReadOnly(true)
        }

        initialForm.dhOpening = response.DH_Opening
        initialForm.dtOpening = formatDateInput(response.DH_Opening)
        initialForm.hrOpening = formatTime(response.DH_Opening)

        initialForm.dhClosed = response.DH_Closed
        initialForm.dtClosed =
          response.DH_Closed === null
            ? ''
            : (initialForm.dtClosed = formatDateInput(response.DH_Closed))
        initialForm.hrClosed =
          response.DH_Closed === null ? '' : (initialForm.hrClosed = formatTime(response.DH_Closed))

        initialForm.detailing = response.Detailing
        initialForm.observation = response.Observation
        initialForm.solution = response.Solution
        initialForm.numberCondition = response.Number_Condition
        initialForm.idEquipment = response.ID_Equipment
        initialForm.idUserCustomer = response.ID_User_Customer
        initialForm.idUserEmploye = response.ID_User_Employe
        initialForm.idTypeService = response.ID_Type_Service

        let responseProducts = response.products
        setProductsAdd([...productsAdd, ...responseProducts])
        setForm((form) => ({ ...form, ...initialForm }))
      })
    } else {
      initialForm.dhOpening = ''
      initialForm.dtOpening = ''
      initialForm.hrOpening = ''
      initialForm.dhClosed = null
      initialForm.dtClosed = ''
      initialForm.hrClosed = ''
      initialForm.detailing = ''
      initialForm.observation = ''
      initialForm.solution = ''
      initialForm.numberCondition = ''
      initialForm.idEquipment = 0
      initialForm.idUserCustomer = 0
      initialForm.idUserEmploye = 0
      initialForm.idTypeService = 0
      setProductsAdd([])
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

    let dhNewOpening = new Date(form.dtOpening + ' ' + form.hrOpening)
    dhNewOpening = formatDateDB(dhNewOpening)

    let dhNewClosed = null
    if (props.type === 2 && !isNUllorEmpty(form.dtClosed) && !isNUllorEmpty(form.hrClosed)) {
      dhNewClosed = new Date(form.dtClosed + ' ' + form.hrClosed)
      dhNewClosed = formatDateDB(dhNewClosed)
    }

    const dataNewOS = {
      dhOpening: dhNewOpening,
      dhClosed: dhNewClosed,
      detailing: form.detailing,
      observation: form.observation,
      solution: form.solution,
      numberCondition: form.numberCondition,
      idEquipment: form.idEquipment,
      idUserCustomer: form.idUserCustomer,
      idUserEmploye: form.idUserEmploye,
      idTypeService: form.idTypeService,
      products: productsAdd,
    }

    if (props.type === 1) {
      let responseInsertOs = await reqInsertOrderService(dataNewOS)
      if (responseInsertOs.insert === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/')
        }, 3000)
      }
    } else {
      dataNewOS.idOs = props.idOs
      dataNewOS.idUserEmploye = 2

      let returnUpdateOs = await reqPutOrderService(dataNewOS)
      if (returnUpdateOs.update === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/')
        }, 3000)
      }
    }
  }

  const handlerOnChanged = (e) => {
    let idProduct = parseInt(e.target.value)
    for (let i = 0; i < optionsProduct.length; i++) {
      const element = optionsProduct[i]

      if (element.value === parseInt(idProduct)) {
        formProduct.Name_Product = element.label
        setInputProduct({ ID_Product: idProduct })
        setInputProduct({ Price: parseFloat(element.price) })
      }
    }
  }

  const handlerOnChangedCustomer = (e) => {
    let idUserCustomer = parseInt(e.target.value)
    setInput({ idUserCustomer: idUserCustomer })
    const returnEquipment = reqGetEquipments(idUserCustomer)
    returnEquipment.then((response) => {
      const newArray = response.map((value) => {
        return { label: value.Name_Equipment, value: value.ID_Equipment }
      })
      setOptionsIdEquipment([...initialOptionsEquipments, ...newArray])
      setVisibleEquipment(true)
    })
  }

  const handleOnClickProduct = () => {
    setProductsAdd([...productsAdd, ...[formProduct]])
    setFormProduct(initialFormProdut)
    setVisibleModal(false)
  }

  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }))
  }

  const setInputProduct = (newValue) => {
    setFormProduct((formProduct) => ({ ...formProduct, ...newValue }))
  }

  return (
    <CCardBody className="p-4">
      {visible === true ? <CAlert color="danger">{mensageError}</CAlert> : ''}
      {visibleSuccess === true ? (
        <CAlert color="success">Cadastro realizado com sucesso!</CAlert>
      ) : (
        ''
      )}

      <CForm className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
        <CInputGroup className="mb-3">
          <CFormSelect
            readOnly={readonly}
            aria-label="Default select "
            options={optionsIdUserCustomer}
            value={form.idUserCustomer}
            onChange={(e) => {
              handlerOnChangedCustomer(e)
            }}
            feedbackInvalid="Por favor selecione o cliente."
            required
          />
        </CInputGroup>

        {typeAccessP === 1 ? (
          <CInputGroup className="mb-3">
            <CFormSelect
              readOnly={readonly}
              aria-label="Default select "
              options={optionsIdUserEmploye}
              value={form.idUserEmploye}
              onChange={(e) => setInput({ idUserEmploye: e.target.value })}
              feedbackInvalid="Por favor selecione o funcionário."
              required
            />
          </CInputGroup>
        ) : (
          ''
        )}

        <CInputGroup className="mb-3">
          <CInputGroupText>Data de abertura {typeAccessP+ " " +readonly}</CInputGroupText>
          <CFormInput
            readOnly={props.type === 2 && typeAccessP === 2 && readonly === false ? true : readonly}
            placeholder="Nome"
            value={form.dtOpening}
            type="date"
            onChange={(e) => setInput({ dtOpening: e.target.value })}
            feedbackInvalid="Por favor insera a Data da Abertura."
            required
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>Hora de abertura</CInputGroupText>
          <CFormInput
            readOnly={ props.type === 2 && typeAccessP === 2 && readonly  === false ? true : readonly}
            placeholder="Hora de Abertura"
            type="time"
            value={form.hrOpening}
            onChange={(e) => setInput({ hrOpening: e.target.value })}
            feedbackInvalid="Por favor insira a hora de abertura."
            required
          />
        </CInputGroup>

        {visibleEquipment ? (
          <CInputGroup className="mb-3">
            <CFormSelect
              readOnly={readonly}
              aria-label="Default select "
              options={optionsIdEquipment}
              value={form.idEquipment}
              onChange={(e) => setInput({ idEquipment: e.target.value })}
              feedbackInvalid="Por favor selecione um veiculo."
              required
            />
          </CInputGroup>
        ) : (
          ''
        )}

        <CInputGroup className="mb-3">
          <CFormSelect
            readOnly={readonly}
            aria-label="Default select "
            options={optionsIdTypeService}
            value={form.idTypeService}
            onChange={(e) => setInput({ idTypeService: e.target.value })}
            feedbackInvalid="Por favor selecione o tipo de serviço."
            required
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormInput
            readOnly={readonly}
            type="text"
            placeholder="Detalhes"
            value={form.detailing}
            onChange={(e) => setInput({ detailing: e.target.value })}
            feedbackInvalid="Por favor preencha os detalhes."
            required
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormInput
            readOnly={readonly}
            type="text"
            placeholder="Observação"
            value={form.observation}
            onChange={(e) => setInput({ observation: e.target.value })}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormInput
            readOnly={readonly}
            type="text"
            placeholder="Solução"
            value={form.solution}
            onChange={(e) => setInput({ solution: e.target.value })}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormInput
            readOnly={readonly}
            placeholder="KM/Horimetro"
            value={form.numberCondition}
            onChange={(e) => setInput({ numberCondition: e.target.value })}
            feedbackInvalid="Por favor insira o quilometragem/horimetro."
            required
          />
        </CInputGroup>
        {props.type === 2 ? (
          <>
            <CInputGroup className="mb-3">
              <CInputGroupText>Data de finalização</CInputGroupText>
              <CFormInput
                readOnly={readonly}
                placeholder="Data de Finalização"
                value={form.dtClosed}
                type="date"
                onChange={(e) => setInput({ dtClosed: e.target.value })}
                feedbackInvalid="Por favor insera a data de finalização."
                // required
              />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>Hora de finalização</CInputGroupText>
              <CFormInput
                readOnly={readonly}
                placeholder="Hora de Finalização"
                type="time"
                value={form.hrClosed}
                onChange={(e) => setInput({ hrClosed: e.target.value })}
                feedbackInvalid="Por favor insira a hora de finalização."
                // required
              />
            </CInputGroup>
          </>
        ) : (
          ''
        )}

        <CTable align="middle" className="mb-0 border" hover>
          <CTableHead className="text-nowrap">
            <CTableRow>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Nome Produto
              </CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Quantidade
              </CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Valor Unitário
              </CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Valor total
              </CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                <CButton color="primary" onClick={() => setVisibleModal(!visible)}>
                  Adicionar Produto
                </CButton>
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {productsAdd.length > 0 ? (
              productsAdd.map((item, index) => {
                return (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">{item.Name_Product}</CTableDataCell>
                    <CTableDataCell className="text-center">{item.Amount}</CTableDataCell>
                    <CTableDataCell className="text-center">{item.Price}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      {item.Amount * item.Price}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol>
                          <CIcon icon={cilXCircle} />
                        </CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                )
              })
            ) : (
              <CTableRow v-for="item in tableItems" key={0}>
                <CTableDataCell className="text-center">Sem Produtos</CTableDataCell>
                <CTableDataCell className="text-center">0.0</CTableDataCell>
                <CTableDataCell className="text-center">0.0</CTableDataCell>
                <CTableDataCell className="text-center">0.0</CTableDataCell>
                <CTableDataCell>
                  <CRow>
                    <CCol>
                      <CIcon icon={cilXCircle} />
                    </CCol>
                  </CRow>
                </CTableDataCell>
              </CTableRow>
            )}
          </CTableBody>
        </CTable>
        <br />

        <div className="d-grid">
          {typeAccessP !== 3 ? (
            <CButton type="submit" color="success">
              {props.type === 1 ? 'Adicionar O.S.' : ''}
              {props.type === 2 ? 'Alterar O.S.' : ''}
            </CButton>
          ) : (
            ''
          )}
        </div>
      </CForm>
      <CModal
        alignment="center"
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredExample">Cadastro de produto</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="needs-validation"
            noValidate
            // validated={validated}
            // onSubmit={handleSubmitProduct}
          >
            <CInputGroup className="mb-3">
              <CFormSelect
                aria-label="Default select "
                options={optionsProduct}
                value={formProduct.ID_Product}
                // onChange={(e) => setInputProduct({ idProduct: e.target.value})}
                onChange={(e) => {
                  handlerOnChanged(e)
                }}
                feedbackInvalid="Por favor selecione um produto."
                required
              />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>Quantidade</CInputGroupText>
              <CFormInput
                placeholder="Quantidade"
                value={formProduct.Amount}
                type="number"
                onChange={(e) => setInputProduct({ Amount: parseInt(e.target.value) })}
                feedbackInvalid="Por favor insera a quantidade."
                required
              />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>Preço Unitário</CInputGroupText>
              <CFormInput
                placeholder="Preço Unitário"
                type="number"
                readOnly
                value={formProduct.Price}
              />
            </CInputGroup>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleModal(false)}>
            Cancelar
          </CButton>
          <CButton onClick={handleOnClickProduct} color="primary">
            Adicionar
          </CButton>
        </CModalFooter>
      </CModal>
    </CCardBody>
  )
}
