import React from 'react'
import ContactForm from './reduxForm';

class ContactPage extends React.Component{
    submit = values =>{
        console.log(values)
    }
    render() {
        return <div><ContactForm onSubmit={this.submit}/>
        </div>
    }
}

export default ContactPage