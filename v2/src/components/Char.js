import React from 'react';
import { Label } from 'semantic-ui-react';
import './Char.css';

class Char extends React.Component {

    render() {

        const styleForBorder = this.props.isDragging ? '1px dashed #4099ff' : '1px solid #ddd';

        return (

            <div
                className="char"
                style={styleForBorder}
                ref={this.props.provided.innerRef}
                {...this.props.provided.draggableProps}
                {...this.props.provided.dragHandleProps}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Char;