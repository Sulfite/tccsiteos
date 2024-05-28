import instance from "../_config/axiosConfig";

export const reqGetProducts = async (data) => {
    let output = await instance
      .post(`/product/listProducts`, data, {
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

export const reqGetProduct = async (id) => {
    console.log(id);
    let output = await instance
        .get(`/product/${id}`, {
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

export const reqInsertProduct = async (data) => {
    let output = await instance
        .post(`/product/register`, data, 
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

export const reqPutProduct = async (data, id) => {
    let output = await instance
        .put(`/product/update/${id}`, data, {
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