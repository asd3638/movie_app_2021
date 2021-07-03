import React from 'react'

class State extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }
    state= {
        count: 0
    }
    handlePlus() {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleMinus() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>This is state component</h1>
                <p>{count}</p>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        )
    }
}

export default State;