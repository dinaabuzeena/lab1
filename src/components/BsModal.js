import React, { Component } from 'react';
import {
  Card,
  Modal


} from 'react-bootstrap';

class BsModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} fullscreen={this.props.showModal} onHide={this.props.handeClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img style={{ height: 'auto', background: 'cover' }} src={this.props.img} />
            <p style={{ fontSize: '80px' ,fontWeight : 'bold' }}>Description:{this.props.descreption}</p>

          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default BsModal