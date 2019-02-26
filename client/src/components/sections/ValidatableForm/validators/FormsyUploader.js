import React from 'react';
import { propTypes, withFormsy } from 'formsy-react';

import Uploader from '../elements/Uploader/index';

@withFormsy
export default class FormsyUploader extends React.Component {
    static propTypes = { ...propTypes };

    changeValue = event => this.props.setValue(event.target.value);

    render() {
        const { props } = this;

        return (
            <Uploader
                name={props.name}
                required={props.required}
                disabled={props.disabled}
                // Processed props
                onChange={this.changeValue}
                value={this.props.getValue()}
                errorText={this.props.getErrorMessage()}
            />
        );
    }
}