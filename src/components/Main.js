import React, { Component } from 'react'
import SelectedBeast from './SelectedBeast';
import {Button,Card,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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
    getHandleOpen=()=>{
        let title=this.props.title;
        let img=this.props.img;
        let description=this.props.description;
        this.props.handleOpen(title,img,description);
    }

    render() {

        return (

            <>
            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img className={'img'} variant="top" onClick={this.raiseVote} src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        number of like : {this.state.vote}
                            
                        </Card.Text>
                        <Button 
                                onClick={this.getHandleOpen}
                                variant="primary"
                        >
                                descriptin
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
        )
            
        //     <div>
        //        <h4>title: {this.props.title}</h4>
        //        <img   onClick={this.raiseVote}src ={this.props.img} alt={this.props.keyword}/>
        //         <p>description:{this.props.description} years</p> 
        //         <p>{this.state.vote}</p>
        //     </div>
        // )
    }
}

export default Main
