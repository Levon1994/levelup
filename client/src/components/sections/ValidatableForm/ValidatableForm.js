import React from 'react';
import Formsy from 'formsy-react';

import { omit } from 'utils';

import './style.scss';

export default class ValidatableForm extends React.PureComponent {
    state = { canSubmit: false };

    disableButton = _ => this.checkFormValidation(false);

    enableButton = _ => this.checkFormValidation(true);

    checkFormValidation(canSubmit) {
        this.setState({ canSubmit });
        this.props.checkFormValidation && this.props.checkFormValidation(canSubmit);
        this.forceUpdate();
    };

    render() {
        const { props } = this;
        const {
            children,
            additionalFooterContent,
        } = props;

        return (
            <Formsy
                className={`ValidatableForm ${this.props.className || ''}`}
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                {...omit(props, [
                    'onValid', 'onInvalid', 'children', 'checkFormValidation',
                    'additionalButtonProps', 'additionalFooterContent',
                ])}
            >
                <div className="ValidatableForm_content">
                    {children}
                    </div>
                    <div className="ValidatableForm_footer">
                    {
                        additionalFooterContent ?
                            additionalFooterContent :
                            <div>
                                <button
                                    type="reset"
                                    color="primary"
                                    variant="raised"
                                    children="Reset"
                                    onClick={this.props.onReset}
                                />
                                <button
                                    type="submit"
                                    color="primary"
                                    variant="raised"
                                    disabled={!this.state.canSubmit}
                                    children="Submit"
                                />
                            </div>
                    }
                    </div>
            </Formsy>
            );
            }
}