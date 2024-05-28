import instance from "../_config/axiosConfig";

export const reqGetOrdersServices = async (data) => {
    let output = await instance
      .post(`/os/listOs`, data, {
        headers: {
          'x-access-token': `${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        // Error

        console.log(error);
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

export const reqGetOrdersServicesMonthClosed = async () => {
    let output = await instance
      .get(`/os/osMonthClosed`, {
        headers: {
          'x-access-token': `${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          return error.response.data
        }
      })
    return output
}

export const reqGetOrdersServicesMonthTypesServices = async () => {
    let output = await instance
      .get(`/os/osMonthTypeService`, {
        headers: {
          'x-access-token': `${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          return error.response.data
        }
      })
    return output
}

export const reqGetEmployOrdersServices = async (data) => {
    let output = await instance
      .post(`/os/listEmployeOs`, data, {
        headers: {
          'x-access-token': `${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        // Error

        console.log(error);
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

export const reqGetOrderService = async (id) => {
    let output = await instance
        .get(`/os/osDetails/${id}`, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                console.log(error.response.data);
                return error.response.data;
            }
        });
    return output;
}

export const reqInsertOrderService = async (data) => {
    let output = await instance
        .post(`/os/register`, data, 
        {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            // Error
            if (error.response) {
                console.log(error.response.data);
                return error.response.data;
            }
        });
    return output;
};

export const reqPutOrderService = async (data) => {
    let output = await instance
        .put(`/os/edit`, data, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                console.log(error.response.data);
                return error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    return output;
};

export const reqClosedOrderService = async (data, id) => {
    let output = await instance
        .put(`/os/close`, data, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                console.log(error.response.data);
                return error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    return output;
};