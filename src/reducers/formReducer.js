const list = (state = {createName: '', createType: "1"}, action) =>{
    switch(action.type){
        case 'UPDATE_NAME':
            return  {
                    ...state,
                    createName: action.createName
                    }
        case 'UPDATE_TYPE':
            return  {
                    ...state,
                    createType: action.createType
                    }
        case 'CLEAR_FORM':
            return  {
                    createName: '',
                    createType: "1"                    
                    }
        default:
            return state
    }
};

export default list