import {combineReducers} from 'redux'
import list from './formReducer'
import responseApi from './responseApiReducer'
import {reducer as formReducer} from 'redux-form'
// export default list
export default combineReducers({
    list, 
    responseApi,
    form: formReducer
})