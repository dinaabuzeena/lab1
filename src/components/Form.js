import React, { Component } from 'react'

 class Form extends Component {
    render() {
        return (
            <div>
               <form onSubmit={this.props.handleSubmit}>
                    
                    <select onChange={(e)=>{this.props.handleSelect(e)}}>
                        <option value="">Select num of horns </option>
                        <option value="1">Software engineer</option>
                        <option value="2">Forntend engineer</option>
                        <option value="3">Backend engineer</option>
                    </select>
                    <input type="submit" />
                </form> 
            </div>
        )
    }
}

export default Form
