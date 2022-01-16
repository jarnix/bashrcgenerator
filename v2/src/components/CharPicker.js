import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class CharPicker extends React.Component {

   
    render() {
        

        return (
            
            <div>
                {this.props.children}
            </div>
              
            
        );
    }
}

export default CharPicker;