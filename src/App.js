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
      img:"",
      description:""
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (title,img,description) => {
    this.setState({
      showModal: true,
      title: title,
      img:img,
      description:description


    })
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
          description={this.state. description}
        />
        <Footer />
      </div>
    )
  }
}

export default App
