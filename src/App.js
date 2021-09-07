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
      name: "",
      title: ""
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (name, title) => {
    this.setState({
      showModal: true,
      name: name,
      title: title

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
          name={this.state.name}
          title={this.state.title}
        />
        <Footer />
      </div>
    )
  }
}

export default App
