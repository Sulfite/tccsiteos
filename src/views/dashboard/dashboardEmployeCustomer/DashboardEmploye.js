import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CHeader,
  CInputGroup,
  CInputGroupText,
  CNavLink,
  CRow,
} from '@coreui/react'
import { useEffect, useState } from 'react'
import { reqClosedOrderService, reqGetEmployOrdersServices } from '../../../api/servicesOrdersApi'
import {
  calculateDateDifference,
  formatDateDB,
  formatDateInput,
  isNUllorEmpty,
} from '../../../_ultils/Ultils'

const DashboardEmployeCustomer = (props) => {
  const initialForm = {
    openClose: 'A',
    dataInit: null,
    dataClose: null,
    offset: 0,
    limit: 9999,
  }

  const options = [
    { label: 'Selecione', value: '' },
    { label: 'Aberto', value: 'A' },
    { label: 'Fechado', value: 'F' },
  ]

  const [form, setForm] = useState(initialForm)
  const [listOs, setListOs] = useState([])

  useEffect(() => {
    const returnListOsEmploye = reqGetEmployOrdersServices(initialForm)
    returnListOsEmploye.then((response) => {
      setListOs(response)
    })
  }, [])

  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }))
  }

  const handleClickButton = () => {
    let returnListOsEmploye = reqGetEmployOrdersServices(form)
    returnListOsEmploye.then((response) => {
      setListOs(response)
    })
  }

  const handlerClickClosed = (idOs) => {
    let dataOs = {
      idOs,
      dhClosed: formatDateDB(new Date()),
    }
    const returnOsClosed = reqClosedOrderService(dataOs)
    returnOsClosed.then((response) => {
      if (response[0] > 0) {
        setListOs([])
        const returnListOsEmploye = reqGetEmployOrdersServices(initialForm)
        returnListOsEmploye.then((response) => {
          setListOs(response)
        })
      }
    })
  }

  return (
    <CContainer>
      <CRow className="align-items-center justify-content-center">
        <CCol md={6} xl={6}>
          {' '}
          <h3>Ordens de serviços</h3>
        </CCol>
        <CCol md={6} xl={6} className="buttonEnd">
          {props.typeAccess === 2 ? (
            <CNavLink href={`#/os/osAdd`} active>
              Nova O.S.
            </CNavLink>
          ) : (
            ''
          )}
        </CCol>
      </CRow>
      <CRow>
        <CCard className="mb-12">
          <CCardHeader>Filtro de Os</CCardHeader>
          <CCardBody>
            <CForm className="needs-validation">
              <CRow>
                <CCol xs={4}>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>Data de abertura</CInputGroupText>
                    <CFormInput
                      type="date"
                      // label="Data de abertura"
                      placeholder="Data de abertura"
                      onChange={(e) => setInput({ dataInit: e.target.value })}
                    />
                  </CInputGroup>
                </CCol>
                <CCol xs={4}>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>Data de finalização</CInputGroupText>
                    <CFormInput
                      type="date"
                      // label="Data de finalização"
                      placeholder="Data de finalização"
                      onChange={(e) => setInput({ dataClose: e.target.value })}
                    />
                  </CInputGroup>
                </CCol>
                <CCol xs={2}>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>Situação</CInputGroupText>
                    <CFormSelect
                      aria-label="Default select "
                      options={options}
                      value={form.openClose}
                      onChange={(e) => setInput({ openClose: e.target.value })}
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
      </CRow>
      <br />
      <CRow>
        {listOs.length > 0
          ? listOs.map((item, index) => {
              let dtOpening = item.DH_Opening
              dtOpening = dtOpening.split('T')
              dtOpening = new Date(dtOpening[0])

              return (
                <CCol className="cardOS" sm={12} md={4} lg={3} key={index}>
                  <CCard className="text-center">
                    <CCardHeader>{item.Name_Equipment}</CCardHeader>
                    <CCardBody>
                      <CCardTitle>{item.Name_Type_Service}</CCardTitle>
                      <CCardText>{item.Detailing}</CCardText>
                      <CRow>
                        <CCol>
                          <CNavLink href={`#/os/osEdt/${item.ID_OS}`} active>
                            <CIcon icon={cilPen} /> Ver O.S
                          </CNavLink>
                        </CCol>
                        {isNUllorEmpty(item.DH_Closed) && (props.typeAccess === 2) ? (
                          <CCol>
                            <CButton color="primary" onClick={() => handlerClickClosed(item.ID_OS)}>
                              Fechar O.S
                            </CButton>
                          </CCol>
                        ) : (
                          ''
                        )}
                      </CRow>
                    </CCardBody>
                    <CCardFooter className="text-body-secondary">
                      {isNUllorEmpty(item.DH_Closed)
                        ? `${calculateDateDifference(new Date(), new Date(item.DH_Opening))} dias em aberto.`
                        : 'Fechado'}
                    </CCardFooter>
                  </CCard>
                </CCol>
              )
            })
          : ''}
      </CRow>
    </CContainer>
  )
}

export default DashboardEmployeCustomer
