import { useNavigate } from "react-router-dom";
import UserActionsTypes from "./actionTypes";

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {

  // const navigate = useNavigate();

  // colocar switch posteriormente
    switch (action.type) {
        case UserActionsTypes.LOGIN:
          localStorage.setItem('token', action.payload.token);
          return { ...state, currentUser: action.payload };
        case UserActionsTypes.LOGOUT:
            localStorage.clear();
            // navigate('/Login')
            return initialState;
        case UserActionsTypes.UPPLAN:
            return { ...state, currentUser: action.payload };
          break;
        default:
          return state;
      }
};

export default userReducer;
