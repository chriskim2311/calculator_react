import React, {Component} from  'react'
import './Buttons.css'






class Button extends Component {
    render () {
        return (
            <div className="Button"
            onClick={this.props.onClick}
            value = {this.props.value}
            >
            {this.props.label}
            </div>
        )
    }
}


export default Button