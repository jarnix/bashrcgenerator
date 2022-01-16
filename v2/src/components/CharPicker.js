import React from 'react';
import styled from 'styled-components';

import { Container, Button, Icon, Menu, Header, Segment } from 'semantic-ui-react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

import Char from './Char';
import CharClone from './CharClone';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log('==> dest', destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const Content = styled.div`
    margin-right: 200px;
`;



const Clone = styled(Char)`
    + div {
        display: none !important;
    }
`;



const List = styled.div`
    border: 1px
        ${props => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
    background: #fff;
    padding: 0.5rem 0.5rem 0;
    border-radius: 3px;
    flex: 0 0 150px;
    font-family: sans-serif;
`;

const Kiosk = styled(List)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 200px;
`;

const Container2 = styled(List)`
    margin: 0.5rem 0.5rem 1.5rem;
    background: #ccc;
`;

const Notice = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
    border: 1px solid transparent;
    line-height: 1.5;
    color: #aaa;
`;

const Button2 = styled.button`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    color: #000;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 3px;
    font-size: 1rem;
    cursor: pointer;
`;

const ButtonText = styled.div`
    margin: 0 1rem;
`;





class CharPicker extends React.Component {

    state = {
        list: []
    };
    onDragEnd = result => {
        const { source, destination } = result;

        console.log('==> result', result);

        // dropped outside the list
        if (!destination) {
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                this.setState({
                    [destination.droppableId]: reorder(
                        this.state[source.droppableId],
                        source.index,
                        destination.index
                    )
                });
                break;
            case 'ITEMS':
                this.setState({
                    [destination.droppableId]: copy(
                        this.props.items,
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                });
                break;
            default:
                this.setState(
                    move(
                        this.state[source.droppableId],
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                );
                break;
        }
    };

    render() {


        return (

            <DragDropContext onDragEnd={this.onDragEnd}>


                <Segment>

                    <Header as='h5'><Icon size='tiny' name='folder open' />Available Elements</Header>
                    
                    <Segment padded inverted>

                        <Droppable droppableId="ITEMS" isDropDisabled={true}>
                            {(provided, snapshot) => (
                                <Kiosk
                                    ref={provided.innerRef}
                                    isDraggingOver={snapshot.isDraggingOver}>
                                    {this.props.items.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id.toString()}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <React.Fragment>
                                                    <Char
                                                        provided={provided}
                                                        isDragging={snapshot.isDragging} 
                                                        style={ provided.draggableProps.style }
                                                        >
                                                        {item.content}
                                                    </Char>
                                                    {snapshot.isDragging && (
                                                        <CharClone>{item.content}</CharClone>
                                                    )}
                                                </React.Fragment>
                                            )}
                                        </Draggable>

                                    ))}
                                    {provided.placeholder}
                                </Kiosk>
                            )}
                        </Droppable>

                       
                    </Segment>
                </Segment>

                <Segment>
                    <Header as='h5'><Icon size='tiny' name='shopping cart' />Your Selection</Header>
                    <Segment padded inverted>


                        <Droppable droppableId="list">
                            {(provided, snapshot) => (
                                <Container2
                                    ref={provided.innerRef}
                                    isDraggingOver={
                                        snapshot.isDraggingOver
                                    }>
                                    {this.state.list.length
                                        ? this.state.list.map(
                                            (item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}>
                                                    {(
                                                        provided,
                                                        snapshot
                                                    ) => (
                                                        <Char
                                                            provided={provided}
                                                            isDragging={snapshot.isDragging}
                                                            style={
                                                                provided
                                                                    .draggableProps
                                                                    .style
                                                            }>

                                                            {item.content}
                                                        </Char>
                                                    )}
                                                </Draggable>
                                            )
                                        )
                                        : !provided.placeholder && (
                                            <Notice>
                                                Drop items here
                                            </Notice>
                                        )}
                                    {provided.placeholder}
                                </Container2>
                            )}
                        </Droppable>

                    </Segment>
                    <Container textAlign='right'>
                        <Button basic color='red'>Clear Selection</Button>
                    </Container>
                </Segment>

            </DragDropContext>

        );
    }
}

export default CharPicker;