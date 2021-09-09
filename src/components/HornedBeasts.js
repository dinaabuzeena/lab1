import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";



 class HornedBeasts extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        }
    }
    raiseVote = () => {
        this.setState({
            vote: this.state.vote + 1
        })

    }
    getHandleOpen = () => {
        let title = this.props.title;
        let image_url = this.props.image_url;
        let description = this.props.description;
        let horns = this.props.horns;

        this.props.handleOpen(title, image_url, description);
    }

    render() {

        return (

            <>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img className={'img'} variant="top" onClick={this.raiseVote} src={this.props.image_url} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                number of horns : {this.state.horns}
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
    }
       

    
}

export default HornedBeasts
