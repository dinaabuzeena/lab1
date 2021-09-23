import React, { Component } from 'react';
import Data from './data.json';
import SelectedBeast from './SelectedBeast';
import BsForm from './BsForm';


class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            speciality:''
        }
    }

    handleSelect = (e) => {
        let speciality = e.target.value;
        this.setState({
          speciality: speciality
        })
    }
    render() {

        return (
            <>
                <h1>Horned Beasts </h1>
                <p> 
                    displays images and information of horned animals.
                    This application will allow you to filter the images by
                    number of horns and chose your favorite image.</p>

                    <BsForm
                     handleSelect={this.handleSelect} />
                    <br/>
                <div className="row">
                    {

                    Data.map(element => {
                       return  element.horns===Number(this.state.speciality)&&<SelectedBeast
                            horns={element.horns}
                            title={element.title}
                            descreption={element.description}
                            keyword={element.keyword}
                            img={element.image_url} />
                             }) 
                    }
                </div>{
                    

                }
                            


            </>
        )
    }
}

export default Main