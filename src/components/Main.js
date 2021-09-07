import React, { Component } from 'react'
import SelectedBeast from './SelectedBeast';


 class Main extends Component {
    constructor(props){
        super(props);
        this.state={
                vote:0
        }
    }
    raiseVote=()=>{
        this.setState({
            vote:this.state.vote+1
        })
        
    }
    render() {

        return (
            
            <div>
               <h4>title: {this.props.title}</h4>
               <img   onClick={this.raiseVote}src ={this.props.img} alt={this.props.keyword}/>
                <p>description:{this.props.description} years</p> 
                <p>{this.state.vote}</p>
            </div>
        )
    }
}

export default Main
