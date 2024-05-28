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

import { reqGetTypesServices } from '../../api/serviceApi'

const ServiceList = () => {
  const [typeServices, setTypeServices] = useState([])

  useEffect(() => {
    const returnListTypesServices = reqGetTypesServices()
    returnListTypesServices.then((response) => {
      setTypeServices(response)
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Lista de Tipos de serviços</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Nome do Serviço
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Valor
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Ação
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {typeServices.length > 0 ? (
                    typeServices.map((item, index) => {
                      return (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center">
                            {item.Name_Type_Service}
                          </CTableDataCell>
                          <CTableDataCell className="text-center">{item.Price}</CTableDataCell>
                          <CTableDataCell>
                            <CRow>
                              <CCol>
                                <CNavLink
                                  href={`#/services/serviceEdt/${item.ID_Type_Service}`}
                                  active
                                >
                                  <CIcon icon={cilPen} />
                                </CNavLink>
                              </CCol>
                            </CRow>
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })
                  ) : (
                    <CTableRow v-for="item in tableItems" key={0}>
                      <CTableDataCell className="text-center">
                        Serviço não encontrado ou não cadastrado
                      </CTableDataCell>
                      <CTableDataCell className="text-center">0.0</CTableDataCell>
                      <CTableDataCell>
                        <CRow>
                          <CCol>
                            <CIcon icon={cilPen} />
                          </CCol>
                        </CRow>
                      </CTableDataCell>
                    </CTableRow>
                  )}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ServiceList
