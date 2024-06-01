import React, { useState } from 'react'
import DashboardAdm from './dashboardAdm/DashboardAdm'
import { connect } from 'react-redux'
import DashboardEmployeCustomer from './dashboardEmployeCustomer/DashboardEmploye'

const Dashboard = (props) => {
  const [typeAccess, setTypeAccess] = useState(props.currentUser.accessType);
  return (
    <>
      {
        (typeAccess === 1) ? <DashboardAdm /> : <DashboardEmployeCustomer typeAccess={typeAccess} />
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps)(Dashboard);