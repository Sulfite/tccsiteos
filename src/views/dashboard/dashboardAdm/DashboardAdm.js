import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import { CChartBar } from '@coreui/react-chartjs'
import { useEffect, useState } from 'react'
import { reqGetOrdersServicesMonthClosed, reqGetOrdersServicesMonthTypesServices } from '../../../api/servicesOrdersApi'

const DashboardAdm = () => {
  const [totalMonth, setTotalMonth] = useState([]);

  const [labelTypesServices, setLabelTypesServices] = useState([]);
  const [dataTypesServices, setDataTypesServices] = useState([]);
  
  useEffect(() => {
    const returnMonthClosed = reqGetOrdersServicesMonthClosed();
    returnMonthClosed.then((response) => {
      setTotalMonth(response)
    })

    const returnMonthTypesServices = reqGetOrdersServicesMonthTypesServices();
    returnMonthTypesServices.then((response) => {      
      let data = [];
      let responseLabel = response.label;
      let responseData = response.data;
      
      responseLabel.forEach(element => {
        let dataFilter = responseData.filter((e) => e.Name_Type_Service === element)
        if (dataFilter.length > 0) {
          data.push(dataFilter[0].Total);
        } else {
          data.push(0)
        }
      });
      
      setLabelTypesServices(responseLabel);
      setDataTypesServices(data);
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Ordens de Serviços fechadas por Mês</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                  datasets: [
                    {
                      label: 'Ordens de Serviços',
                      backgroundColor: '#f87979',
                      data: totalMonth,
                    },
                  ],
                }}
                labels="Mês"
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Tipos de Serviços Atendidos por Mês</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: labelTypesServices,
                  datasets: [
                    {
                      label: 'Serviços',
                      backgroundColor: '#f87979',
                      data: dataTypesServices,
                    },
                  ],
                }}
                labels="Mês"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardAdm