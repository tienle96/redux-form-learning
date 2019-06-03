import Form from './FormComponent';
import React, {Component} from 'react';
// import {connect} from 'react-redux';


class CreateButtonComponent extends Component{
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.handleToggle=this.handleToggle.bind(this);
    }
    render(){
        return(
            <div>
                <br></br>
                <hr></hr>
                <center><button onClick={this.handleToggle}>
                    {this.state.show ? 'Hide' : 'Show'}
                </button></center>
                {
                    this.state.show
                    ?
                    <Form />
                    :
                    null 
                }
            </div>
        )
    }
    handleToggle(){
        this.setState(state => ({
            show: !state.show
        }))
    }
}

export default CreateButtonComponent //connect()(CreateButtonComponent)