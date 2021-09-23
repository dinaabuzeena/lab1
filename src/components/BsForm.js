import React, { Component } from 'react';
import {
    Form
} from 'react-bootstrap';
import DataHorns from './data.json';




let arr2 = [];
DataHorns.map(item => {
    return arr2.push(item.horns);
});

arr2.sort((a, b) => {
    return (a - b);
});

let optionArray = arr2.filter((item, pos) => {
    return arr2.indexOf(item) === pos;
})
console.log(optionArray)


class BsForm extends Component {


    render() {

    
        return (
            <>
                <Form.Select onChange={(e) => { this.props.handleSelect(e) }} aria-label="Default select example">
                    <option value="">Select Number of horns</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>

            </>
        )
    }
}

export default BsForm