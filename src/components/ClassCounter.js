import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }

    CounterHandlar = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    

    render() {
        return (
            <div>
                <button onClick={this.CounterHandlar}>Click {this.state.counter}</button>
            </div>
        )
    }
}

export default ClassCounter
