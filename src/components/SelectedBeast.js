import React, { Component } from 'react';
import {
    Card,
    Col
} from 'react-bootstrap'
import BsModal from './BsModal';


class SelectedBeast extends Component {
    constructor(fav) {
        super(fav);
        this.state = {
            fav: 0,
            show:false,
        }
    }

    favFun = () => {
        this.setState({
            fav: this.state.fav + 1,
            show:true
        });
    }

    handeClose=()=>{
        this.setState({
            show:false
        })
    }


    render() {
        return (
            <>
             
                <Col>
                    <Card style={{ width: '19rem' ,height:'auto' }}>
                        <Card.Img style={{margin:'auto' ,background:'cover',height:'19rem'}} 
                        variant="top" 
                        onClick={this.favFun} 
                        src={this.props.img} />
                        <Card.Body>
                            <Card.Title>Title: {this.props.keyword}</Card.Title>
                            <Card.Text>
                                 <h3>likes:&#128151;{this.state.fav}</h3>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <BsModal showModal={this.state.show}
                         handeClose={this.handeClose} 
                         keyword={this.props.keyword}
                         title={this.props.title}
                         img={this.props.img}
                         descreption={this.props.descreption}
                        />
            </>
        )
    }
}

export default SelectedBeast