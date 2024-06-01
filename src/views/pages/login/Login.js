import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { reqLogin } from '../../../api/userApi'

import UserActionsTypes from '../../../redux/User/actionTypes'

const Login = () => {

  const [username, setUsername] = useState();
  const [passwordUser, setPasswordUser] = useState();

  const [visible, setVisible] = useState(false);
  const [reqError, setReqError] = useState({title: '', message: ''});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerClickLogin = async (e) => {
      e.preventDefault();
      let returnLogin = await reqLogin(username, passwordUser);

      console.log(returnLogin);

      if (returnLogin.authorized === true) {
          dispatch({
              type: UserActionsTypes.LOGIN,
              payload: { 
                  authorized: returnLogin.authorized,
                  token: returnLogin.token,
                  accessType: returnLogin.idTypeAccess,
                  name: returnLogin.name
              }
          })
          navigate('/dashboard');
      } else {
          setReqError({title: returnLogin.title, message: returnLogin.message});
          setVisible(true);
      }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Entrar</h1>
                    <p className="text-body-secondary">Entre com a sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" onChange={(e) => setUsername(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        onChange={(e) => setPasswordUser(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton color="primary" className="px-4" onClick={handlerClickLogin}>
                          Acessar
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrar-se</h2>
                    <p>
                      Cadastre-se agora e confie seus veículos à melhor oficina da região. Experimente nosso serviço de excelência e mantenha seu carro em perfeito estado com a nossa equipe especializada!
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Cadastre-se agora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        <CModal
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="LiveDemoExampleLabel"
        >
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle id="LiveDemoExampleLabel">{reqError.title}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>{reqError.message}</p>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Fechar
            </CButton>
          </CModalFooter>
        </CModal>
      
      </CContainer>
    </div>
  )
}

export default Login
