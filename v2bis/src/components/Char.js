import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Char.css';


class Char extends Component {
    render() {
        return (
            <div
                className="char"
                ref={this.props.provided.innerRef}
                style={this.props.provided.draggableProps.style}
                {...this.props.provided.draggableProps}
            /*onClick={() => this.props.setCurrentCharIndex(this.props.charIndex)}*/
            >
                <Icon color='orange' {...this.props.provided.dragHandleProps} name={this.props.icon} />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Char;