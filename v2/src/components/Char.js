import React from 'react';
import { Label } from 'semantic-ui-react';

class Char extends React.Component {
    render() {

        return (
            <div
              
                >
                    {this.props.displayText}
            </div>
        );
    }
}

export default Char;