import React, { Component } from 'react';
import '../assets/css/app.scss';
import Button from "./button"
import Buttons from "./buttons"
import Display from "./display"
import update from 'immutability-helper'
import './App.css'
import math from 'mathjs'



class App extends Component {
    constructor() {
        super()
        this.state = { operations: [] }
    }

    calculateOps = ()=> {
        let result = this.state.operations.join('')
        if(result) {
            result = math.eval(result).toFixed(2)
            this.setState({
                operations: [result]
            })
        }


    }


    handleClick = (event) => {
        const value = event.target.getAttribute('value')

        switch (value) {
            case 'clear':
                this.setState({
                    operations: []

                })
                break
            case 'equal':
                this.calculateOps()
                break
            default:
            const newOperations = update(this.state.operations, {
                $push: [value],
              })
              this.setState({
                operations: newOperations,
              })
              break
                break
        }


    }


    render() {
        return (
            <div className="App">
                <Display data={this.state.operations} />
                <Buttons>

                    <Button onClick={this.handleClick} label="C" value="clear" />

                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />

                    <Button onClick={this.handleClick} label="x" value="*" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="" value="" />

                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" value="+" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />

                </Buttons>



            </div>
        )
    }



}

// const App = () => (
//     <div>
//         <div className="app">
//             <img src={logo} className="logo rotate"/>
//             <h1>Welcome To React</h1>
//         </div>
//     </div>
// );

export default App;
