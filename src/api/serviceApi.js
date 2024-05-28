import instance from "../_config/axiosConfig";

export const reqGetTypesServices = async () => {
    let output = await instance
      .get(`typeservice/listTypeServices`, {
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

export const reqGetTypeService = async (id) => {
    let output = await instance
        .get(`typeservice/${id}`, {
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

export const reqInsertTypeService = async (data) => {
    let output = await instance
        .post(`typeservice/register`, data, 
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

export const reqPutTypeService = async (data, id) => {
    let output = await instance
        .put(`typeservice/update/${id}`, data, {
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