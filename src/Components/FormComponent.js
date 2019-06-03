import React from 'react'
import {connect} from 'react-redux'
import {callCreateApi, updateName, updateType} from '../actions'

const FormComponent = ({dispatch, list, responseApi}) => {

    return (
            <div><center>
            <form onSubmit = {e=>{
                e.preventDefault()
                dispatch(callCreateApi(list))
                dispatch({
                    type: 'CLEAR_FORM'
                })
            }}>
                <h1>Create Form</h1>
                <label>Name</label>
                {/* <input name='name' onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/> */}
                <input value={list.createName} onChange={(e)=>dispatch(updateName(e.target.value))} />
                <br></br>
                <label>Type</label>
                <select value={list.createType} onChange={(e)=>dispatch(updateType(e.target.value))}>
                    <option value="1">Volvo</option>
                    <option value="2">Saab</option>
                </select>
                <button>Submit</button>
                {/* <div>{JSON.stringify(responseApi)}</div> */}
                <ul>
                    {responseApi.map(rs=>
                        <li>{rs.createName}</li>
                        )}
                </ul>
            </form>
            </center></div>
        )
    }

const mapStateToProps = state => {
    return {
        list:state.list,
        responseApi: state.responseApi
    }
}
export default connect(mapStateToProps)(FormComponent)