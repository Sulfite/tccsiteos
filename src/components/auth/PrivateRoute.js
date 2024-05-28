import { Route } from 'react-router-dom'
import { isAuthenticated } from './auth'

const PrivateRoute = ({ element: Element, ...rest }) => {
  console.log(element);
  console.log(...rest);
  return (
  <Route
  {...rest}
  render={(props) =>
      isAuthenticated() ? (
        <Element {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
    />
  )  
}

export default PrivateRoute;