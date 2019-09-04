import React, { Component } from 'react';

class Test extends Component {
    componentDidMount() {
        console.log('Second-> componentDidMount')
    }
    componentWillMount() {
        console.log('First->  componentWillMount')
    }
    componentDidUpdate() {
        console.log('Third-> componentDidUpdate execute when state change or update ')
    }
    componentWillUpdate() {
        console.log('Forth-> componentWillUpdate execute when state change or update ')
    }
    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps which work with redux')
    }
    render() { 
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}
 
export default Test;