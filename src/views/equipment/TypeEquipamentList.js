import {
  cilPen,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
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
import { reqGetTypesEquipments } from '../../api/equipamentApi'

const TypeEquipamentList = (props) => {
  
  const [typesEquipment, setTypesEquipment] = useState([])
  useEffect(() => {
    const returnListTypesEquipments = reqGetTypesEquipments();
    returnListTypesEquipments.then((response) => {
      console.log(response);
      setTypesEquipment(response)
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Lista tipo de equipamentos</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Nome Tipo Equipamento
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Ação
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {typesEquipment.length > 0
                    ? typesEquipment.map((item, index) => {
                        return (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                              {item.Name_Type_Equipment}
                            </CTableDataCell>
                            <CTableDataCell>
                              <CRow>
                                <CCol>
                                  <CNavLink href={`#/equipment/typeEquipmentEdt/${item.ID_Type_Equipment}`} active>
                                    <CIcon icon={cilPen} />
                                  </CNavLink>
                                </CCol>
                              </CRow>
                            </CTableDataCell>
                          </CTableRow>
                        )
                      })
                    : <CTableRow v-for="item in tableItems" key={0}>
                    <CTableDataCell className="text-center">
                      Tipo de Veículo não encontrado ou não cadastrado;
                    </CTableDataCell>
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

export default TypeEquipamentList