import StylesActionsTypes from "./actionTypes"

const initialState = {
	sidebarShow: true,
	theme: 'light',
  }
  
const changeState = (state = initialState, { type, ...rest }) => {
	switch (type) {
		case StylesActionsTypes.SET:
		return { ...state, ...rest }
		default:
		return state
	}
}

export default changeState;