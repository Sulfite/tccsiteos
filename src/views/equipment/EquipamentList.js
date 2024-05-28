import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CNavLink,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useEffect, useState } from 'react'
import { reqGetEquipments } from '../../api/equipamentApi'

const EquipamentList = (props) => {
  const initialForm = {
    name: '',
    offset: 0,
    limit: 9999,
  }

  const [form, setForm] = useState(initialForm)
  const [equipments, setEquipments] = useState([])

  useEffect(() => {
    const returnListEquipments = reqGetEquipments(0)
    returnListEquipments.then((response) => {
      console.log(response)
      setEquipments(response)
    })
  }, [])

  // const handleClickButton = async () => {
  //   let returnList = await reqGetEquipment(form)
  //   returnList.then((response) => {
  //     setProducts(response)
  //   })
  // }

  // const setInput = (newValue) => {
  //   setForm((form) => ({ ...form, ...newValue }))
  // }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Lista de equipamentos</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Nome Equipamento
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Nº Frota</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo Equipamento
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Setor</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Ativo</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Ação</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {equipments.length > 0 ? (
                    equipments.map((item, index) => {
                      return (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center bg-body-tertiary">
                            {item.Name_Equipment}
                          </CTableDataCell>
                          <CTableHeaderCell className="text-center bg-body-tertiary">
                            {item.NO_Frota}
                          </CTableHeaderCell>
                          <CTableHeaderCell className="text-center bg-body-tertiary">
                            {item.Name_Type_Equipment}
                          </CTableHeaderCell>
                          <CTableHeaderCell className="text-center bg-body-tertiary">
                            {item.Name_Sector}
                          </CTableHeaderCell>
                          <CTableHeaderCell className="text-center bg-body-tertiary">
                            {item.Active_Equipment}
                          </CTableHeaderCell>
                          <CTableDataCell className="text-center bg-body-tertiary">
                            <CRow>
                              <CCol>
                                <CNavLink
                                  href={`#/equipment/equipmentEdt/${item.ID_Equipment}`}
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
                      <CTableDataCell className="text-center bg-body-tertiary">
                        Veículo não encontrado ou não cadastrado
                      </CTableDataCell>
                      <CTableHeaderCell className="text-center bg-body-tertiary">
                        -
                      </CTableHeaderCell>
                      <CTableHeaderCell className="text-center bg-body-tertiary">
                        -
                      </CTableHeaderCell>
                      <CTableHeaderCell className="text-center bg-body-tertiary">
                        -
                      </CTableHeaderCell>
                      <CTableHeaderCell className="text-center bg-body-tertiary">
                        -
                      </CTableHeaderCell>
                      <CTableDataCell className="text-center bg-body-tertiary">
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

export default EquipamentList
