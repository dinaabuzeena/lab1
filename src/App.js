import React, { Component } from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from './components/SelectedBeast';
import animals from './data.json'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      img: "",
      description: "",
      horns: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      // showUser:true
    })
  }
  handleSelect = (e) => {
    let horns = e.target.value;
    this.setState({
      horns: horns
    });


    handleClose = () => {
      this.setState({
        showModal: false
      })
    }
    handleOpen = (title, img, description, horns) => {
      this.setState({
        showModal: true,
        title: title,
        img: img,
        description: description,
        horns: horns

      });
    }
    render() {
      return (

        <div>

          <Header />{

            animals.map(element => {
              return <Main handleOpen={this.handleOpen}
                title={element.title}
                img={element.image_url}
                description={element.description} />

            })
          }

          <SelectedBeast handleClose={this.handleClose}
            showModal={this.state.showModal}
            title={this.state.title}
            img={this.state.img}
            description={this.state.description}
            horns={this.state.horns}
          />
          <Form handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
          />
          <Footer />
        </div>
      )
    }
  }
}

export default App
