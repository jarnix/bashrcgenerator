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
            >
                <Icon color='orange' {...this.props.provided.dragHandleProps} name='expand' />
                <div
                    onClick={() => console.log('coucou')}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Char;