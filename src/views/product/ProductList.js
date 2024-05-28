import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilCheckAlt,
  cilPen,
  cilPeople,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CNavLink,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useEffect, useState } from 'react'

import { reqGetProducts } from '../../api/productApi'

const ProductList = (props) => {
  const initialForm = {
    name: '',
    offset: 0,
    limit: 9999,
  }
  
  const [form, setForm] = useState(initialForm)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const returnListProducts = reqGetProducts(initialForm);
    returnListProducts.then((response) => {
      setProducts(response)
    })
  }, [])

  const handleClickButton = async () => {
    let returnList = await reqGetProducts(form)
    returnList.then((response) => {
      setProducts(response)
    })
  }

  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }))
  }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Filtro de usuários</CCardHeader>
            <CCardBody>
              <CForm className="needs-validation">
                <CRow>
                  <CCol xs={10}>
                    <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="Nome do Produto"  
                      onChange={(e) => setInput({ name: e.target.value })}
                    />
                    </CInputGroup>
                  </CCol>
                  <CCol xs={2}>
                    <div className="d-grid">
                      <CButton type="button" onClick={handleClickButton} color="success">
                        Filtrar
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Lista de produtos</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" >
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Nome Produto
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Quantidade
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Valor
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Ação
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {products.length > 0
                    ? products.map((item, index) => {
                        return (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                              {item.Name_Product}
                            </CTableDataCell>
                            <CTableDataCell className="text-center">{item.Amount}</CTableDataCell>
                            <CTableDataCell className="text-center">
                              {item.Priece}
                            </CTableDataCell>

                            
                            <CTableDataCell>
                              <CRow>
                                <CCol>
                                  <CNavLink href={`#/product/productEdt/${item.ID_Product}`} active>
                                    <CIcon icon={cilPen} />
                                  </CNavLink>
                                </CCol>
                                {/* <CCol>
                                  <CButton
                                    type="button"
                                    color="success"
                                    onClick={handlerClickActive}
                                  >
                                    <CIcon icon={cilCheckAlt} />
                                  </CButton>
                                </CCol> */}
                              </CRow>
                            </CTableDataCell>
                          </CTableRow>
                        )
                      })
                    : <CTableRow v-for="item in tableItems" key={0}>
                    <CTableDataCell className="text-center">
                      Produto não encontrado ou não cadastrado
                    </CTableDataCell>
                    <CTableDataCell className="text-center">0.0</CTableDataCell>
                    <CTableDataCell className="text-center">0.0</CTableDataCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol>
                            <CIcon icon={cilPen} />
                        </CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ProductList
