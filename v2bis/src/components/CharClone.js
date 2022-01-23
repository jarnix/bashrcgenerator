import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Char from './Char.js';
import './Char.css';


// border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #000')};


class CharClone extends Component {

/*
 <Item
    innerRef={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    isDragging={snapshot.isDragging}
    style={
        provided.draggableProps
            .style
    }>
    {item.content}
</Item>

*/

    render() {
        return(
            <div className="charClone">
                {this.props.children}
            </div>
        );
    }
}

export default CharClone;