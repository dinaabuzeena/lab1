import React, { Component } from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from './components/SelectedBeast';
import animals from './data.json'
import Form from './components/Form';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title:"",
      image_url:"",
      description:"",
      horns: "",
      data:animals,
      filterdata:animals,
      NumberOfHorns:""
    }
  }


  handleSelect = (e) => {
    let NumberOfHorns = parseInt(e.target.value);
    this.setState({
      NumberOfHorns: NumberOfHorns,
           filterdata: this.state.data.filter((element) => {
        if (NumberOfHorns == element.horns) {
          return element
        }
      }),
    });
  };


  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (title, image_url, description, horns) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
      horns: horns

    });
  }
  render() {
    return (

      <div>

        <Header />{

          // animals.map(element => {
          //   return <Main handleOpen={this.handleOpen}
          //     title={element.title}
          //     img={element.image_url}
          //     description={element.description} />

          // })
        }
        <Form handleSelect={this.handleSelect}
          NumberOfHorns={this.state.NumberOfHorns}
        />

        <Main
          handleOpen={this.handleOpen}
          filterdata={this.state.filterdata}
        />

        <SelectedBeast handleClose={this.handleClose}
          showModal={this.state.showModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          horns={this.state.horns}
        />
        

        <Footer />
      </div>
    )
  }
}


export default App
