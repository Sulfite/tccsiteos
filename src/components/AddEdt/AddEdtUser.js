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
import { reqPutUser, reqInsertUser, reqInsertUserCustomer, reqTypeAccessUser, reqGetUser } from '../../api/userApi'
import { formatDateInput, isNUllorEmpty } from '../../_ultils/Ultils'

export const UserAddEdt = (props) => {
  const initialForm = {
    nameUser: '',
    username: '',
    passwordUser: '',
    repatPasswordUser: '',
    dtBirth: '',
    nationalIdentifier: '',
    typePerson: '',
    idTypeAccess: 3,
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
  const [mensageError, setMensageError] = useState('');

  const initialOptions = [{ label: 'Selecione o Tipo de Usuario', value: '' }]
  const [options, setOptions] = useState(initialOptions)

  useEffect(() => {
    if (props.type !== 1) {
      const returnTypeAccess = reqTypeAccessUser()

      returnTypeAccess.then((response) => {
        const newArray = response.map((value) => {
          return { label: value.Name_Type_Access, value: value.ID_Type_Access }
        })
        setOptions([...initialOptions, ...newArray])
      })
    }

    if (props.type === 3 && !isNUllorEmpty(props.idUser)) {
      const InformationUser = reqGetUser(props.idUser);

      InformationUser.then((response) => {
        initialForm.nameUser = response.Name_User
        initialForm.username = response.Username
        initialForm.dtBirth = formatDateInput(new Date(response.DT_Birth))
        initialForm.nationalIdentifier = response.National_Identifier
        initialForm.typePerson = response.Type_Person
        initialForm.idTypeAccess = response.ID_Type_Access

        setForm((form) => ({ ...form, ...initialForm }));
      });
    } else {
        initialForm.nameUser = "";
        initialForm.username = "";
        initialForm.dtBirth = "";
        initialForm.nationalIdentifier = "";
        initialForm.typePerson = "";
        initialForm.idTypeAccess = "";
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

    if (form.passwordUser !== form. repatPasswordUser) {
      setVisible(true)
      setMensageError('As senha são diferentes.')
      return false
    }

    const dataNewUser = {
      nameUser: form.nameUser,
      username: form.username,
      passwordUser: form.passwordUser,
      dtBirth: form.dtBirth,
      nationalIdentifier: form.nationalIdentifier,
      typePerson: form.nationalIdentifier.length > 11 ? 'J' : 'F',
      idTypeAccess: (props.type === 1) ? 3 : form.idTypeAccess,
    }

    if (props.type === 1) {
      let responseInsertUserCustomer = await reqInsertUserCustomer(dataNewUser);
      if (responseInsertUserCustomer.insert === true) {
        setVisibleSuccess(true);
        setTimeout(() => {
          nav('/login');
        }, 3000)
      }
    } else if (props.type === 2) {
      let returnInsert = await reqInsertUser(dataNewUser)
      console.log(returnInsert);
      if (returnInsert.insert === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/user/listUsers')
        }, 3000)
      }
    } else {
      let returnUpdateUser = await reqPutUser(dataNewUser, props.idUser)
      if (returnUpdateUser.update === true) {
        setVisibleSuccess(true)
        setTimeout(() => {
          nav('/user/listUsers')
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
          {props.type === 1 ? (
            <CInputGroupText>
              <CIcon icon={cilUser} />
            </CInputGroupText>
          ) : (
            ''
          )}
          <CFormInput
            placeholder="Nome"
            value={form.nameUser}
            onChange={(e) => setInput({ nameUser: e.target.value })}
            feedbackInvalid="Por favor insera o nome."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          {props.type === 1 ? (
            <CInputGroupText>
              <CIcon icon={cilUser} />
            </CInputGroupText>
          ) : (
            ''
          )}
          <CFormInput
            placeholder="Nome de usuario"
            autoComplete="username"
            value={form.username}
            onChange={(e) => setInput({ username: e.target.value })}
            feedbackInvalid="Por favor insira o nome de usuário."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          {props.type === 1 ? (
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
          ) : (
            ''
          )}
          <CFormInput
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={(e) => setInput({ passwordUser: e.target.value })}
            feedbackInvalid="Por favor insira uma senha."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-4">
          {props.type === 1 ? (
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
          ) : (
            ''
          )}
          <CFormInput
            type="password"
            placeholder="Repeat password"
            autoComplete="new-password"
            onChange={(e) => setInput({ repatPasswordUser: e.target.value })}
            feedbackInvalid="por favor repita a senha."
            required
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          {props.type === 1 ? (
            <CInputGroupText>
              <CIcon icon={cilCalendar} />
            </CInputGroupText>
          ) : (
            ''
          )}
          <CFormInput
            type="date"
            placeholder="Data de Nascimento"
            value={form.dtBirth}
            onChange={(e) => setInput({ dtBirth: e.target.value })}
            feedbackInvalid="Por favor insira a data de nascimento."
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3">
          {props.type === 1 ? (
            <CInputGroupText>
              <CIcon icon={cilBook} />
            </CInputGroupText>
          ) : (
            ''
          )}
          <CFormInput
            placeholder="CPF/CNPJ"
            value={form.nationalIdentifier}
            onChange={(e) => setInput({ nationalIdentifier: e.target.value })}
            feedbackInvalid="Por favor insira o CPF/CNPJ."
            required
          />
        </CInputGroup>
        {props.type !== 1 ? (
          <CInputGroup className="mb-3">
            <CFormSelect
              aria-label="Default select "
              options={options}
              value={form.idTypeAccess}
              onChange={(e) => setInput({ idTypeAccess: e.target.value })}
              feedbackInvalid="Por favor selecione o tipo de acesso do usuário."
              required
            />
          </CInputGroup>
        ) : (
          ''
        )}
        <div className="d-grid">
          <CButton type="submit" color="success">
            {props.type === 1 ? 'Criar Conta' : ''}
            {props.type === 2 ? 'Criar usuário' : ''}
            {props.type === 3 ? 'Alterar usuário' : ''}
          </CButton>
        </div>
      </CForm>
    </CCardBody>
  )
}

// export default AddEdtUser
