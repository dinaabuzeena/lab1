import React, { Component } from 'react'

 class HornedBeasts extends Component {
    render() {
        return (
            <div>
               <h4>title: {this.props.title}</h4>
               <img src={ this.props.image_url} alt={this.props.keyword}/>
                <p>description:{this.props.description} years</p> 
            </div>
        )
    }
}

export default HornedBeasts
