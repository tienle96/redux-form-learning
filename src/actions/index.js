export const updateName = createName => ({
    type: 'UPDATE_NAME',
    createName
})

export const updateType = createType => ({
    type: 'UPDATE_TYPE',
    createType
})

export const callCreateApi = (params) => {
    return dispatch => fetch('http://localhost:3333/form', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            // let rs = json.form
            dispatch({
                type: 'DATA_SUCCESS',
                json
            })
            // alert(JSON.stringify(rs));
    })
    .catch(error =>{
        alert('Error');
    });
}
