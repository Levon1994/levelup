import React from 'react';
import classNames from 'classnames';

import './style.scss';

export default class TextField extends React.PureComponent {
    static defaultProps = {
        value: '',
    };

    onChange = event => !this.props.disabled && this.props.onChange && this.props.onChange(event);

    render() {
        const { props } = this;
        const {
            value,
            startAdornment,
            endAdornment,
            additionalInputProps,
        } = props;

        return (
            <div className="TextField">
                {props.label && (
                    <label className="TextField_label">
                        {props.label}
                    </label>
                )}
                <div className={
                    classNames('TextField_content formElement', {
                        disabled: props.disabled,
                        filled: Boolean(value),
                        invalid: props.invalid,
                    })
                }>
                    {startAdornment && (
                        <div className="TextField_startAdornment">
                            {startAdornment}
                        </div>
                    )}
                    <input
                        value={value}
                        type={props.type}
                        name={props.name}
                        onChange={this.onChange}
                        placeholder={props.placeholder}
                        autoComplete="true"
                        {...additionalInputProps}
                    />
                    {endAdornment && (
                        <div className="TextField_endAdornment">
                            {endAdornment}
                        </div>
                    )}
                </div>
                {props.errorText && (
                    <p className="formElement_errorText">
                        {props.errorText}
                    </p>
                )}
                {props.helperText && (
                    <p className="formElement_helperText">
                        {props.helperText}
                    </p>
                )}

            </div>
        );
    }
}