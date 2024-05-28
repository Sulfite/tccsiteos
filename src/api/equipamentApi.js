import instance from "../_config/axiosConfig";

export const reqGetEquipments = async (idUser) => {
    let output = await instance
      .get(`/equipments/listEquipaments/${idUser}`, {
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

export const reqGetEquipment = async (id) => {
    console.log(id);
    let output = await instance
        .get(`/equipments/getEquipment/${id}`, {
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

export const reqInsertEquipment = async (data) => {
    let output = await instance
        .post(`/equipments/register`, data, 
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

export const reqPutEquipment = async (data, id) => {
    let output = await instance
        .put(`/equipments/update/${id}`, data, {
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

export const reqGetTypesEquipments = async () => {
    let output = await instance
      .get(`/equipments/listTypeEquipaments`, {
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

export const reqGetTypeEquipment = async (id) => {
    console.log(id);
    let output = await instance
        .get(`/equipments/type/${id}`, {
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

export const reqInsertTypeEquipment = async (data) => {
    let output = await instance
        .post(`/equipments/registerType`, data, 
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

export const reqPutTypeEquipment = async (data, id) => {
    let output = await instance
        .put(`/equipments/updateType/${id}`, data, {
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

export const reqGetSectors = async () => {
    let output = await instance
      .get(`/equipments/listSectors`, {
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
