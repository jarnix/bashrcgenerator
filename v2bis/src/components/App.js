import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Container, Button, Icon, Menu, Header, Segment, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Char from './Char';
import CharClone from './CharClone';
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

const remove = (droppableElements, indexToRemove) => {
    const droppableElementsClone = Array.from(droppableElements);
    droppableElementsClone.splice(indexToRemove, 1);
    return droppableElementsClone;
};


const List = styled.div`
    display:flex;
    flex-wrap: nowrap;
    width: 100%;    
    border: 1px ${props => (props.isDraggingOver ? 'dashed #FFF' : 'solid #000')};
    padding: 0.5rem 0.5rem 0;
    border-radius: 3px;
    font-family: sans-serif;
`;

const Kiosk = styled(List)`
    display:flex;
    flex-wrap: wrap;
`;

const Container2 = styled(List)`
    display:flex;
    flex-wrap: nowrap;
`;

const Notice = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0.35rem;
    margin: 0 0.2rem 0rem;
    border: 1px solid transparent;
    line-height: 1.5;
    color: #aaa;
`;

const ITEMS = [
    { "id": uuid(), "text": "hostnameShort", "desc": "hostname (short)", "html": "mycomputer", "code": "\\h" },
    { "id": uuid(), "text": "hostnameFull", "desc": "hostname (full)", "html": "mycomputer.example", "code": "\\H" },
    { "id": uuid(), "text": "username", "desc": "username", "html": "username", "code": "\\u" },
    { "id": uuid(), "text": "shellName", "desc": "shell name", "html": "bash", "code": "\\v" },
    { "id": uuid(), "text": "terminal", "desc": "terminal", "html": "ttys02", "code": "\\l" },
    { "id": uuid(), "text": "currentDirectory", "desc": "directory", "html": "/usr/local/src", "code": "\\w" },
    { "id": uuid(), "text": "currentDirectoryBase", "desc": "directory (basename)", "html": "src", "code": "\\W" },
    { "id": uuid(), "text": "timeShort", "desc": "time-short (HH:MM)", "html": "14:23", "code": "\\A" },
    { "id": uuid(), "text": "timeLong", "desc": "time with seconds (HH:MM:SS)", "html": "14:23:52", "code": "\\t" },
    { "id": uuid(), "text": "timeAMPM", "desc": "time (HH:MM)", "html": "07:23 AM", "code": "\\@" },
    { "id": uuid(), "text": "timeDate", "desc": "date (Day Month Date)", "html": "Mon Feb 22", "code": "\\d" },
    { "id": uuid(), "text": "exitStatus", "desc": "exit status", "html": "0", "code": "\\$?" },
    { "id": uuid(), "text": "charGreaterThan", "desc": ">", "html": ">", "code": ">" },
    { "id": uuid(), "text": "charAt", "desc": "@", "html": "@", "code": "@" },
    { "id": uuid(), "text": "charColon", "desc": ":", "html": ":", "code": ":" },
    { "id": uuid(), "text": "charComma", "desc": ",", "html": ",", "code": "," },
    { "id": uuid(), "text": "charPeriod", "desc": ".", "html": ".", "code": "." },
    { "id": uuid(), "text": "charQuestion", "desc": "?", "html": "?", "code": "?" },
    { "id": uuid(), "text": "charExclamation", "desc": "!", "html": "!", "code": "!" },
    { "id": uuid(), "text": "charBackslash", "desc": "\\", "html": "\\", "code": "\\\\" },
    { "id": uuid(), "text": "charLeftBrace", "desc": "{", "html": "{", "code": "{" },
    { "id": uuid(), "text": "charRightBrace", "desc": "}", "html": "}", "code": "}" },
    { "id": uuid(), "text": "charLeftBracket", "desc": "[", "html": "[", "code": "[" },
    { "id": uuid(), "text": "charRightBracket", "desc": "]", "html": "]", "code": "]" },
    { "id": uuid(), "text": "charLeftParenthesis", "desc": "(", "html": "(", "code": "(" },
    { "id": uuid(), "text": "charRightParenthesis", "desc": ")", "html": ")", "code": ")" },
    { "id": uuid(), "text": "charCaret", "desc": "^", "html": "^", "code": "^" },
    { "id": uuid(), "text": "charStar", "desc": "*", "html": "*", "code": "*" },
    { "id": uuid(), "text": "charDash", "desc": "-", "html": "-", "code": "-" },
    { "id": uuid(), "text": "charUnderscore", "desc": "_", "html": "_", "code": "_" },
    { "id": uuid(), "text": "charSpace", "desc": "space", "html": " ", "code": " " },
    { "id": uuid(), "text": "charNewLine", "desc": "new line", "html": "<br>", "code": "\\n" },
    { "id": uuid(), "text": "charDollar", "desc": "#/$", "html": "$", "code": "\\\\$" },
    { "id": uuid(), "text": "gitBranch", "desc": "git branch", "html": "(main)", "code": "($(git branch 2>/dev/null | grep '^*' | colrm 1 2))" }
];
class App extends Component {
    state = {
        droppable: [],
        draggable: [],
        trashable: [],
        activeTool: 'prompt'
    };

    componentDidUpdate() {

    }

    onDragEnd = result => {
        const { source, destination } = result;
        console.log('source = ', source.droppableId, 'dest = ', destination.droppableId);

        // dropped outside the list
        if (!destination) {
            console.log('source0 = ', source.droppableId, 'dest0 = ', destination.droppableId);
            this.setState({
                droppable: remove(this.state.droppable, source.index)
            })
        }
        else if (destination.droppableId === 'trashable' && source.droppableId === 'droppable') {
            console.log('source1 = ', source.droppableId, 'dest1 = ', destination.droppableId);
            this.setState({
                droppable: remove(this.state.droppable, source.index)
            })
        } else if (destination.droppableId !== 'trashable') {
            console.log('source2 = ', source.droppableId, 'dest2 = ', destination.droppableId);
            switch (source.droppableId) {
                case destination.droppableId:
                    this.setState({
                        droppable: reorder(
                            this.state[source.droppableId],
                            source.index,
                            destination.index
                        )
                    });
                    break;
                case 'ITEMS':
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
        }
    };

    render() {
        // console.log(this.state);
        return (
            <Container>

                <Menu icon='labeled'>
                    <Menu.Item
                        name='prompt'
                        color='blue'
                        active={this.state.activeTool === 'prompt'}
                        onClick={() => this.setState({ activeTool: 'prompt' })}
                    >
                        <Icon name='angle right' /> Prompt
                    </Menu.Item>
                    <Menu.Item
                        name='window'
                        color='orange'
                        active={this.state.activeTool === 'window'}
                        onClick={() => this.setState({ activeTool: 'window' })}
                    >
                        <Icon name='window maximize' /> Window
                    </Menu.Item>
                </Menu>

                <DragDropContext onDragEnd={this.onDragEnd}>

                    <Segment>

                        <Header as='h5'><Icon size='tiny' name='folder open' />Available Elements. Drop them in your selection.</Header>
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
                                                            isDragging={snapshot.isDragging}
                                                        >
                                                            {item.desc}
                                                        </Char>
                                                        {snapshot.isDragging && (
                                                            <CharClone>
                                                                {item.desc}
                                                            </CharClone>
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
                        <Header as='h5'><Icon size='tiny' name='shopping cart' />Your Selection. Reorder and style your elements.</Header>
                        <Segment padded inverted>

                            <Droppable droppableId='droppable' direction='horizontal'>
                                {(provided, snapshot) => (
                                    <Container2
                                        style={{ overflowX: 'scroll' }}
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
                                                            <Char
                                                                provided={provided}
                                                                isDragging={snapshot.isDragging}
                                                            >
                                                                {item.desc}
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



                        <Grid columns='three' divided>
                            <Grid.Row>
                                <Grid.Column>
                                </Grid.Column>
                                <Grid.Column>

                                    <Droppable droppableId='trashable'>
                                        {(provided, snapshot) => (
                                            <Container2
                                                style={{ height: '35px' }}
                                                innerRef={provided.innerRef}>
                                                {provided.placeholder}
                                                <div style={{ position: 'fixed' }}>
                                                    <i className="trash alternate outline icon"></i>Drop here to remove an element
                                                </div>
                                            </Container2>
                                        )}
                                    </Droppable>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button basic color='red'>Clear Selection</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>







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


            </Container >
        );
    }
}

export default App;