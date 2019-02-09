import React, {Component} from "react"



class Display extends Component {


    render(){
        console.log(this.props)
        const string = this.props.data.join('')

        return(
            <div className="Display">{string}</div>
        )
    }

}



export default Display