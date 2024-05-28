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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { reqTypeAccessUser, reqUsersList } from '../../api/userApi'
import { formatDate } from '../../_ultils/Ultils'

const UsersList = (props) => {
  const initialForm = {
    active: '',
    typeAccess: '',
    offset: 0,
    limit: 9999,
  }

  const optionsActive = [
    { label: 'Selecione o status', value: '' },
    { label: 'Ativo', value: 1 },
    { label: 'Inativo', value: 0 },
  ]

  const initialOptions = [{ label: 'Selecione o Tipo de Usuario', value: '' }]
  const [options, setOptions] = useState(initialOptions)
  const [form, setForm] = useState(initialForm)

  const [users, setUsers] = useState([])

  useEffect(() => {
    const returnTypeAccess = reqTypeAccessUser()

    returnTypeAccess.then((response) => {
      const newArray = response.map((value) => {
        return { label: value.Name_Type_Access, value: value.ID_Type_Access }
      })
      setOptions([...initialOptions, ...newArray])
    })
  }, [])

  const handleClickButton = async () => {
    let returnList = await reqUsersList(form)
    setUsers(returnList)
  }

  const handlerClickActive = async () => {}

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
                  <CCol xs={5}>
                    <CInputGroup className="mb-3">
                      <CFormSelect
                        aria-label="Default select "
                        options={optionsActive}
                        placeholder="Ativo"
                        onChange={(e) => setInput({ active: e.target.value })}
                      />
                    </CInputGroup>
                  </CCol>
                  <CCol xs={5}>
                    <CInputGroup className="mb-3">
                      <CFormSelect
                        aria-label="Default select "
                        options={options}
                        onChange={(e) => setInput({ typeAccess: e.target.value })}
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
            <CCardHeader>Lista de usuários</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Nome do Usuário
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Data de Nascimento
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Documento Indentificação
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Tipo de Acesso</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Ativo</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.length > 0
                    ? users.map((item, index) => {
                        let dtBirth = formatDate(new Date(item.DT_Birth))

                        return (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                              {item.Name_User}
                            </CTableDataCell>
                            <CTableDataCell className="text-center">{dtBirth}</CTableDataCell>
                            <CTableDataCell className="text-center">
                              {item.National_Identifier}
                            </CTableDataCell>
                            <CTableDataCell>{item.Name_Type_Access}</CTableDataCell>
                            <CTableDataCell className="text-center">
                              {item.Active_User === 1 ? 'Ativo' : 'Inativo'}
                            </CTableDataCell>
                            <CTableDataCell>
                              <CRow>
                                <CCol>
                                  <CNavLink href={`#/user/userEdt/${item.ID_User}`} active>
                                    <CIcon icon={cilPen} />
                                  </CNavLink>
                                </CCol>
                                <CCol>
                                  <CButton
                                    type="button"
                                    color="success"
                                    onClick={handlerClickActive}
                                  >
                                    <CIcon icon={cilCheckAlt} />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </CTableDataCell>
                          </CTableRow>
                        )
                      })
                    : ''}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UsersList
