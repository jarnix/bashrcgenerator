import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './Char.css';


const Item = styled.div`
    user-select: none;
    padding: 0.5rem;
    margin: 0 0 0.5rem 0;
    align-items: flex-start;
    align-content: flex-start;
    background-color:white;
    line-height: 1.5;
    border-radius: 3px;
    color: black;
`;

// border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #000')};

const Clone = styled(Item)`
    + div {
        display: none !important;
    }
`;

class Char extends Component {

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
            <div
                className="char"
                ref={this.props.provided.innerRef}
                {...this.props.provided.draggableProps}
                {...this.props.provided.dragHandleProps}
                style={this.props.style}
                ref={this.props.provided.innerRef}
                style={
                    this.props.provided.draggableProps
                        .style
                }>
                {this.props.children}
            </div>
        );
    }
}

export default Char;