import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Container, Button, Icon, Menu, Header, Segment } from 'semantic-ui-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Char from './Char';
// import CharClone from './CharClone';
// import console = require('console');

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
    border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #000')};
`;

const Clone = styled(Item)`
    + div {
        display: none !important;
    }
`;


const List = styled.div`
    display:flex;
    width: 100%;    
    border: 1px ${props => (props.isDraggingOver ? 'dashed #FFF' : 'solid #000')};
    padding: 0.5rem 0.5rem 0;
    border-radius: 3px;
    font-family: sans-serif;
    flex-wrap: wrap;
`;

const Kiosk = styled(List)`
    
`;

const Container2 = styled(List)`
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



const ITEMS = [
    {
        id: uuid(),
        content: 'Headline'
    },
    {
        id: uuid(),
        content: 'Copy'
    },
    {
        id: uuid(),
        content: 'Image'
    },
    {
        id: uuid(),
        content: 'Slideshow'
    },
    {
        id: uuid(),
        content: 'Quote'
    }
];

class App extends Component {
    state = {
        droppable: [],
        draggable: [],
        activeTool: 'prompt'
    };

    componentDidUpdate() {
        // là on renverra le truc au parent
        console.log("update", this.state);
    }

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
                    droppable: reorder(
                        this.state[source.droppableId],
                        source.index,
                        destination.index
                    )
                });
                console.log('destination droppableId', this.state);
                break;
            case 'ITEMS':
                console.log('ITEMS');
                this.setState({
                    droppable: copy(
                        ITEMS,
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                });
                break;
            default:
                console.log('default, move');
                this.setState(
                    move(
                        this.state[source.droppableId],
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                );
                console.log('default', this.state);
                break;
        }
        console.log("state", this.state);
    };


    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        // console.log(this.state);
        return (
            <Container>

                <Menu icon='labeled'>
                    <Menu.Item
                        name='prompt'
                        color='blue'
                        active={this.state.activeTool === 'prompt'}
                        onClick={() => this.setState({activeTool: 'prompt'}) }
                    >
                        <Icon name='angle right' /> Prompt
                    </Menu.Item>
                    <Menu.Item
                        name='window'
                        color='orange'
                        active={this.state.activeTool === 'window'}
                        onClick={() => this.setState({activeTool: 'window'}) }
                    >
                        <Icon name='window maximize' /> Window
                    </Menu.Item>
                </Menu>

                <DragDropContext onDragEnd={this.onDragEnd}>


                    <Segment>

                        <Header as='h5'><Icon size='tiny' name='folder open' />Available Elements</Header>
                        <Segment padded inverted>

                            <Droppable droppableId="ITEMS" isDropDisabled={true}>
                                {(provided, snapshot) => (
                                    <Kiosk
                                        innerRef={provided.innerRef}
                                        isDraggingOver={snapshot.isDraggingOver}>
                                        {ITEMS.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <React.Fragment>
                                                        <Char
                                                            provided={provided}
                                                            /*
                                                            innerRef={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            */
                                                            isDragging={snapshot.isDragging}
                                                        >
                                                            {item.content}
                                                        </Char>
                                                            
                                                        {/*
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
                                                        */}
                                                        {snapshot.isDragging && (
                                                            <Clone>{item.content}</Clone>    
                                                        )}
                                                        {/* <CharClone>{item.content}</CharClone> */}
                                                    </React.Fragment>
                                                )}
                                            </Draggable>
                                        ))}
                                    </Kiosk>
                                )}
                            </Droppable>
                        </Segment>
                    </Segment>

                    <Segment>
                        <Header as='h5'><Icon size='tiny' name='shopping cart' />Your Selection</Header>
                        <Segment padded inverted>

                            

                                <Droppable droppableId='droppable' direction="horizontal">
                                    {(provided, snapshot) => (
                                        <Container2
                                            innerRef={provided.innerRef}
                                            isDraggingOver={
                                                snapshot.isDraggingOver
                                            }>
                                            {this.state.droppable.length
                                                ? this.state.droppable.map(
                                                    (item, index) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(
                                                                provided,
                                                                snapshot
                                                            ) => (
                                                                <Item
                                                                    innerRef={
                                                                        provided.innerRef
                                                                    }
                                                                    {...provided.draggableProps}
                                                                    isDragging={
                                                                        snapshot.isDragging
                                                                    }
                                                                    {...provided.dragHandleProps}
                                                                    style={
                                                                        provided
                                                                            .draggableProps
                                                                            .style
                                                                    }>
                                                                    {item.content}
                                                                </Item>
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


                <Segment>
                    <Header as='h5'><Icon size='tiny' name='eye' />Preview</Header>
                    <Segment padded inverted>

                    </Segment>
                </Segment>

                <Segment>
                    <Header as='h5'><Icon size='tiny' name='code' />Generated code</Header>
                    <Segment padded inverted>

                    </Segment>
                    <Button primary>Copy to clipboard</Button>
                </Segment>


            </Container>
        );
    }
}

export default App;