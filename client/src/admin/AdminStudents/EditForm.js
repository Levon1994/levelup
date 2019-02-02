import React from 'react';

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import { LevelUpButton } from 'components/common';

export default class EditForm extends React.PureComponent{

    constructor(props){
        super(props);

        this.state = {
            isValid: false,
            formData: { ...(props.event === 'edit' ? props.data : null) }
        }
    }

    generateAdditionalFooterContent = () => (
        <div className="flexible grow jCenter aCenter login-footer">
            <LevelUpButton
                onClick={() => this.props.onUpdateMember()}
                variant="contained"
                disabled={!this.state.isValid}
                color="primary">
                {this.props.event === 'edit' ? 'Update' : 'Add'}
            </LevelUpButton>
        </div>
    );

    render(){
        return(
            <ValidatableForm
                className=" ValidatableForm "
                onChange={this.props.onEditFormChange}
                additionalFooterContent={this.generateAdditionalFooterContent()}
                checkFormValidation={(isValid) => this.setState({ isValid })}
            >
                <FormsyText
                    required
                    name="name"
                    placeholder="Name"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.name}
                />
                <FormsyText
                    required
                    name="course"
                    placeholder="Course"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.course}
                />
                <FormsyText
                    required
                    name="imgUrl"
                    placeholder="Image Url"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.imgUrl}
                />
            </ValidatableForm>
        )
    }
}