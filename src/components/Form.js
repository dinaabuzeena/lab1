import React, { Component } from 'react'


class Form extends Component {
    render() {
        return (
            <div>
                <form >

                    <select onChange={(e) => {this.props.handleSelect(e) }}>
                        <option value="0">Select num of horns </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </select>
                    
                </form>
            </div>
        )
    }
}

export default Form
