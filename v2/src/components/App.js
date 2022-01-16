import React from 'react';
import { Container, Button, Icon, Menu, Header, Segment } from 'semantic-ui-react';
import CharPicker from '../components/CharPicker';
import CharSelection from '../components/CharSelection';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

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

const Item = styled.div`
    display: flex;
    user-select: none;
    padding: 0.5rem;
    margin: 0 0 0.5rem 0;
    align-items: flex-start;
    align-content: flex-start;
    line-height: 1.5;
    border-radius: 3px;
    background: #fff;
    border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`;

const Clone = styled(Item)`
    + div {
        display: none !important;
    }
`;

const Handle = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    user-select: none;
    margin: -0.5rem 0.5rem -0.5rem -0.5rem;
    padding: 0.5rem;
    line-height: 1.5;
    border-radius: 3px 0 0 3px;
    background: #fff;
    border-right: 1px solid #ddd;
    color: #000;
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

class App extends React.Component {

    state = {
        [uuid()]: [],
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
                        ITEMS,
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

    addList = e => {
        this.setState({ [uuid()]: [] });
    };

  

    handleItemClick = (e, { name }) => this.setState({ activeTool: name });

    render() {

        return (

            <Container>

                <Menu icon='labeled'>
                    <Menu.Item
                        name='prompt'
                        color='blue'
                        active={this.state.activeTool === 'prompt'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='angle right' /> Prompt
                    </Menu.Item>
                    <Menu.Item
                        name='window'
                        color='orange'
                        active={this.state.activeTool === 'window'}
                        onClick={this.handleItemClick}
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
                                        ref={provided.innerRef}
                                        isDraggingOver={snapshot.isDraggingOver}>
                                        {ITEMS.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <React.Fragment>
                                                        <Item
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            isDragging={snapshot.isDragging}
                                                            style={
                                                                provided.draggableProps
                                                                    .style
                                                            }>
                                                            {item.content}
                                                        </Item>
                                                        {snapshot.isDragging && (
                                                            <Clone>{item.content}</Clone>
                                                        )}
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

                                {Object.keys(this.state).map((list, i) => {
                                    console.log('==> list', list);
                                    return (
                                        <Droppable key={list} droppableId={list}>
                                            {(provided, snapshot) => (
                                                <Container2
                                                    ref={provided.innerRef}
                                                    isDraggingOver={
                                                        snapshot.isDraggingOver
                                                    }>
                                                    {this.state[list].length
                                                        ? this.state[list].map(
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
                                                                            ref={
                                                                                provided.innerRef
                                                                            }
                                                                            {...provided.draggableProps}
                                                                            isDragging={
                                                                                snapshot.isDragging
                                                                            }
                                                                            style={
                                                                                provided
                                                                                    .draggableProps
                                                                                    .style
                                                                            }>
                                                                            <Handle
                                                                                {...provided.dragHandleProps}>
                                                                                <svg
                                                                                    width="24"
                                                                                    height="24"
                                                                                    viewBox="0 0 24 24">
                                                                                    <path
                                                                                        fill="currentColor"
                                                                                        d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                                                                    />
                                                                                </svg>
                                                                            </Handle>
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
                                    );
                                })}
                   





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
