import React from 'react';
import { propTypes, withFormsy } from 'formsy-react';

import TextField from '../elements/TextField/index';

@withFormsy
export default class FormsyText extends React.Component {
    static propTypes = { ...propTypes };

    changeValue = event => this.props.setValue(event.target.value);

    render() {
        const { props } = this;

        return (
            <TextField
                type={props.type}
                name={props.name}
                label={props.label}
                required={props.required}
                disabled={props.disabled}
                helperText={props.helperText}
                placeholder={props.placeholder}
                // Processed props
                onChange={this.changeValue}
                value={this.props.getValue()}
                errorText={this.props.getErrorMessage()}
            />
        );
    }
}