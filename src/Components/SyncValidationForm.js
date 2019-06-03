import React from 'react'
import {Field, reduxForm} from 'redux-form'

const validate = values =>{
    const errors = {}
    if(!values.username){
        errors.username = 'required'
    } 
    if(!values.email){
        errors.email = 'required'
    }
    if(!values.age){
        errors.age = 'required'
    }
    return errors
}

const warn=values => {
    const warnings = {}
    if(values.age < 19) {
        warnings.age = "Hmmm, young..."
    }
    return warnings
}


const renderField = ({input, label, type, meta: {touched, error, warning}})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const SyncValidationForm = props => {
    const {
        handleSubmit 
    } = props
    return (
        <form onSubmit = {handleSubmit}>
            <Field name="username" type="text" component = {renderField} label="Username"/>
            <Field name="email" type="email" component = {renderField} label="Email"/>
            <Field name="age" type="number" component = {renderField} label="Age"/>
            <div>
                <button type="submit">Submit</button>
                <button type="button">Clear value</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'syncValidation',
    validate,
    warn
})(SyncValidationForm)