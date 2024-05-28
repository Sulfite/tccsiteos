import { legacy_createStore as createStore } from 'redux'
import rootReducer from './redux/rootReducer'

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {
    console.error(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state')
    return stateStr ? JSON.parse(stateStr) : undefined
  } catch (e) {
    console.error(e)
    return undefined
  }
}

const persistedStore = loadFromLocalStorage()

//   const store = configureStore(rootReducer, persistedStore);
// const store = createStore(rootReducer)
const store = createStore(rootReducer, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export default store