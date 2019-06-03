const responseApi = (state = [], action) =>{
    switch (action.type){
        case 'DATA_SUCCESS':
            return  [
                    ...state,
                    action.json
                    ]
        default:
            return state
    }
}

export default responseApi