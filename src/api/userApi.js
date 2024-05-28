import instance from '../_config/axiosConfig'

export const reqLogin = async (nameUser, passUser) => {
  let output = await instance
    .post(`/login`, {
      username: nameUser,
      password: passUser,
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data)
        return error.response.data
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    })
  return output
}

export const reqUsersList = async (data) => {
  let output = await instance
    .post(`/listUsers`, data, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data)
        return error.response.data
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    })
  return output
}

export const reqGetUser = async (id) => {
  let output = await instance
    .get(`/user/${id}`, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        console.log(error.response.data)
        return error.response.data
      }
    })
  return output
}

export const reqTypeAccessUser = async () => {
  let output = await instance
    .get(`/typeAccessUser`, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        console.log(error.response.data)
        return error.response.data
      }
    })
  return output
}

export const reqInsertUserCustomer = async (data) => {
  let output = await instance
    .post(`/registerCustomer`, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      // Error
      if (error.response) {
        console.log(error.response.data)
        return error.response.data
      }
    })
  return output
}

export const reqInsertUser = async (data) => {
  let output = await instance
    .post(`/register`, data, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      // Error
      if (error.response) {
        console.log(error.response.data)
        return error.response.data
      }
    })
  return output
}

export const reqPutUser = async (data, id) => {
  let output = await instance
    .put(`/update/${id}`, data, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data)
        return error.response.data
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    })
  return output
}

export const reqListCustomers = async () => {
  let output = await instance
    .get(`/listaCustomer`, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data)
        return error.response.data
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    })
  return output
}

export const reqListEmploye = async () => {
  let output = await instance
    .get(`/listaEmployees`, {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data)
        return error.response.data
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    })
  return output
}