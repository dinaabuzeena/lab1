import React, { Component } from 'react'

 class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>title: {this.props.title}</h2>
               <img src={this.props.image_url} alt={this.props.keyword}/> 
               <p>description:{this.props.description}</p>

            </div>
        )
    }
}

export default HornedBeasts
