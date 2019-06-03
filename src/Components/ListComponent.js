import React, {Component} from 'react'

export default class Form extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.name}</li>                        
                    ))}
                </ul>
            </div>
        )
    }
}