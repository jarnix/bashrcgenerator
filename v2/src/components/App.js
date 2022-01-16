import React from 'react';
import { Container, Button, Icon, Menu, Header, Segment } from 'semantic-ui-react';
import CharPicker from '../components/CharPicker';

const ITEMS = [
    {
        id: 1,
        content: 'Headline'
    },
    {
        id: 2,
        content: 'Copy'
    },
    {
        id: 3,
        content: 'Image'
    },
    {
        id: 4,
        content: 'Slideshow'
    },
    {
        id: 5,
        content: 'Quote'
    }
];

class App extends React.Component {

    state = {
        list: []
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


                <CharPicker items={ITEMS} />



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
