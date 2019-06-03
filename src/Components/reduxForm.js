import React from 'react'
import {Field, reduxForm } from 'redux-form'

let ContactForm = props =>{
    const {handleSubmit} = props
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="fisrtName">fisrtName</label>
                <Field name="firstName" component="input" type= "text"/>
            </div>
            <div>
                <label htmlFor="lastName">lastName</label>
                <Field name="lastName" component="input" type= "text"/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <Field name="email" component="input" type= "email"/>
            </div>
            <button type="submit">Submit</button>
            {props.email}
        </form>
    ) 
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)

// createReduxForm = reduxForm({
//     form: 'contact'
// })

// ContactForm = createReduxForm(ContactForm)

export default ContactForm