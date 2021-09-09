import React, { Component } from 'react'
import SelectedBeast from './SelectedBeast';
import HornedBeast from './HornedBeasts'





class Main extends Component {
    render() {
        return (
          <div className="row">
            {this.props.filterdata.map((element) => {
              return (
                <HornedBeast
                  handleOpen={this.props.handleOpen}
                  handleClose={this.props.handleClose}
                  image_url={element.image_url}
                  title={element.title}
                  description={element.description}
                  keyword={element.keyword}
                  horns={element.horns}
                />
              );
            })}
          </div>
        );
      }

}
export default Main
