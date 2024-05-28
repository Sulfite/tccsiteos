import React, { useEffect, useState } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilCalendar, cilLockLocked, cilUser } from '@coreui/icons'
import { reqInsertUserCustomer } from '../../../api/userApi'
import { isNUllorEmpty } from '../../../_ultils/Ultils';
import { useNavigate } from 'react-router-dom'
import { UserAddEdt } from '../../../components/AddEdt/AddEdtUser'

const Register = () => {

  // const [nameUser, setNameUser] = useState('Consumidor Teste');
  // const [username, setUsername] = useState('consumidor');
  // const [passwordUser, setPasswordUser] = useState('123456');
  // const [repatPasswordUser, setRepatPasswordUser] = useState('123456');
  // const [dtBirth, setDtBirth] = useState('2000-01-01');
  // const [nationalIdentifier, setNationalIdentifier] = useState('12345678909');
  // const [idTypeAccess, setIdTypeAccess] = useState(3);
  
  // const [visible, setVisible] = useState(false);
  // const [visibleSuccess, setVisibleSuccess] = useState(false);
  // const [mensageError, setMensageError] = useState('');
  // const nav = useNavigate();

  // const handlerClickRegister = async (e) => {
  //   e.preventDefault();
  //   setMensageError('');
  //   setVisible(false);


  //   if (isNUllorEmpty(nameUser)) {
  //     setVisible(true);
  //     setMensageError('Preencher o nome');
  //     return false;
  //   }

  //   if (isNUllorEmpty(username)) {
  //     setVisible(true);
  //     setMensageError('Preencher o nome de usuario');
  //     return false;
  //   }

  //   if (isNUllorEmpty(passwordUser)) {
  //     setVisible(true);
  //     setMensageError('Preencher a senha.');
  //     return false;
  //   }

  //   if (passwordUser !== repatPasswordUser) {
  //     setVisible(true);
  //     setMensageError('As senha são diferentes.');
  //     return false;
  //   }

  //   if (isNUllorEmpty(dtBirth)) {
  //     setVisible(true);
  //     setMensageError('Preencher a data de nascimento');
  //     return false;
  //   }

  //   if (isNUllorEmpty(nationalIdentifier)) {
  //     setVisible(true);
  //     setMensageError('Preencher o CPF/CNPJ');
  //     return false;
  //   }

  //   const dataNewUser = {
  //     nameUser: nameUser,
  //     username: username,
  //     passwordUser: passwordUser,
  //     dtBirth: dtBirth,
  //     nationalIdentifier: nationalIdentifier,
  //     typePerson: nationalIdentifier.length > 11 ? "J" : "F",
  //     idTypeAccess : idTypeAccess
  //   }
    
  //   let returnInsert = await reqInsertUserCustomer(dataNewUser);
  //   if (returnInsert.insert === true) {
  //     setVisibleSuccess(true);
  //     setTimeout(() => {
  //       nav('/login');
  //     }, 3000)
  //   }
  // };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardHeader>
                <h1>Register</h1>
                <p className="text-body-secondary">Crie sua conta</p>
              </CCardHeader>
              <UserAddEdt type={1} />

      
              {/* <CCardBody className="p-4">
              {visible === true ?
                <CAlert color="danger">
                  {mensageError}
                </CAlert>
              : ''}

              {visibleSuccess === true ?
                (<CAlert color="success">
                  Cadastro realizado com sucesso!
                </CAlert>)
              : '' }
                <CForm>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Nome" onChange={(e) => setNameUser(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Nome de usuario" autoComplete="username" onChange={(e) => setUsername(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => setPasswordUser(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={(e) => setRepatPasswordUser(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCalendar} />
                    </CInputGroupText>
                    <CFormInput type='date' placeholder="Data de Nascimento" onChange={(e) => setDtBirth(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilBook} />
                    </CInputGroupText>
                    <CFormInput placeholder="CPF/CNPJ" onChange={(e) => setNationalIdentifier(e.target.value)} />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handlerClickRegister}>Criar Conta</CButton>
                  </div>
                </CForm>
              </CCardBody> */}
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
