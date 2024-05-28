import UserActionsTypes from "./actionTypes";

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
  // colocar switch posteriormente
    switch (action.type) {
        case UserActionsTypes.LOGIN:
          console.log('aqui');
          localStorage.setItem('token', action.payload.token);
          return { ...state, currentUser: action.payload };
          break;
        case UserActionsTypes.LOGOUT:
            localStorage.clear();
            return initialState;
          break;
        case UserActionsTypes.UPPLAN:
            return { ...state, currentUser: action.payload };
          break;
        default:
          return state;
      }
};

export default userReducer;
