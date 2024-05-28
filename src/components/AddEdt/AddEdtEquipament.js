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
import {
  reqPutUser,
  reqInsertUser,
  reqInsertUserCustomer,
  reqTypeAccessUser,
  reqGetUser,
} from '../../api/userApi'
import { formatDateInput, isNUllorEmpty } from '../../_ultils/Ultils'
import {
  reqGetEquipment,
  reqGetSectors,
  reqGetTypesEquipments,
  reqInsertEquipment,
  reqPutEquipment,
} from '../../api/equipamentApi'

export const EquipmentAddEdt = (props) => {
  const initialForm = {
    nameEquipment: '',
    noFrota: 0,
    activeEquipment: true,
    idTypeEquipment: 0,
    idSectorEquipment: 0,
  }

  // Type
  //  1 - register
  //  2 - Add logged
  //  3 - edt logged

  const nav = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [visible, setVisible] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const [validated, setValidated] = useState(false)
  const [mensageError, setMensageError] = useState('')

  const initialOptionsSituation = [
    { label: 'Selecione a Situação', value: '' },
    { label: 'Ativo', value: 1 },
    { label: 'Inativo', value: 0 },
  ]

  const initialOptionsTypesEquipments = [{ label: 'Selecione o Tipo de Equiamento', value: '' }]
  const [typeEquipment, setTypeEquipment] = useState(initialOptionsTypesEquipments)

  const initialOptionsSector = [{ label: 'Selecione o Setor', value: '' }]
  const [sector, setSector] = useState(initialOptionsSector)

  useEffect(() => {
    const returnTypeEquipment = reqGetTypesEquipments()

    returnTypeEquipment.then((response) => {
      const newArrayTypeEquipment = response.map((value) => {
        return { label: value.Name_Type_Equipment, value: value.ID_Type_Equipment }
      })
      setTypeEquipment([...initialOptionsTypesEquipments, ...newArrayTypeEquipment])
    })

    const returnSector = reqGetSectors()

    returnSector.then((response) => {
      const newArraySector = response.map((value) => {
        return { label: value.Name_Sector, value: value.ID_Sector }
      })
      setSector([...initialOptionsSector, ...newArraySector])
    })

    if (props.type === 2) {
      const InformationEquipment = reqGetEquipment(props.idEquipment)

      InformationEquipment.then((response) => {
        initialForm.nameEquipment = response.Name_Equipment
        initialForm.noFrota = response.NO_Frota
        initialForm.activeEquipment = response.Active_Equipment
        initialForm.idTypeEquipment = response.ID_Type_Equipment
        initialForm.idSectorEquipment = response.ID_Sector_Equipment

        setForm((form) => ({ ...form, ...initialForm }))
      })
    } else {
      initialForm.nameEquipment = ''
      initialForm.noFrota = ''
      initialForm.activeEquipment = ''
      initialForm.idTypeEquipment = ''
      initialForm.idSectorEquipment = ''
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

    const dataNewEquipment = {
      nameEquipment: form.nameEquipment,
      noFrota: form.noFrota,
      activeEquipment: form.activeEquipment,
      idTypeEquipment: form.idTypeEquipment,
      idSectorEquipment: form.idSectorEquipment,
    }

    if (props.type === 1) {
      let returnInsert = await reqInsertEquipment(dataNewEquipment)
      console.log(returnInsert)
      if (returnInsert.insert === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/equipment/listEquipment')
        }, 3000)
      }
    } else {
      let returnUpdateUser = await reqPutEquipment(dataNewEquipment, props.idEquipment)
      if (returnUpdateUser.update === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/equipment/listEquipment')
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

      <CForm className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
        <CInputGroup className="mb-3">
          <CFormInput
            placeholder="Nome do Equipamento"
            value={form.nameEquipment}
            onChange={(e) => setInput({ nameEquipment: e.target.value })}
            feedbackInvalid="Por favor insera o nome do equipamento."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          <CFormInput
            placeholder="Ano/Número da Frota"
            value={form.noFrota}
            onChange={(e) => setInput({ noFrota: e.target.value })}
            feedbackInvalid="Por favor insira ano/número da frota."
            required
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormSelect
            aria-label="Default select "
            options={initialOptionsSituation}
            value={form.activeEquipment}
            onChange={(e) => setInput({ activeEquipment: e.target.value })}
            feedbackInvalid="Por favor selecione a situação do equipamento."
            required
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormSelect
            aria-label="Default select "
            options={typeEquipment}
            value={form.idTypeEquipment}
            onChange={(e) => setInput({ idTypeEquipment: e.target.value })}
            feedbackInvalid="Por favor selecione o tipo de acesso do usuário."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          <CFormSelect
            aria-label="Default select "
            options={sector}
            value={form.idSectorEquipment}
            onChange={(e) => setInput({ idSectorEquipment: e.target.value })}
            feedbackInvalid="Por favor selecione o setor do equipamento."
            required
          />
        </CInputGroup>

        <div className="d-grid">
          <CButton type="submit" color="success">
            {props.type === 1 ? 'Adicionar Equipamento' : ''}
            {props.type === 2 ? 'Alterar Equipamento' : ''}
          </CButton>
        </div>
      </CForm>
    </CCardBody>
  )
}

// export default AddEdtUser
