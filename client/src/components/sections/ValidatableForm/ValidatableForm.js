import React from 'react';
import Formsy from 'formsy-react';

import { omit } from 'utils';

import { LevelUpButton } from 'components/common';

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
                                <LevelUpButton
                                    type="reset"
                                    onClick={this.props.onReset}>Reset</LevelUpButton>
                                <LevelUpButton
                                    disabled={!this.state.canSubmit}
                                    onClick={this.props.onReset}>Submit</LevelUpButton>
                            </div>
                    }
                    </div>
            </Formsy>
            );
            }
}