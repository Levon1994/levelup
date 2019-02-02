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
        console.log(this.state)
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
                    name="position"
                    placeholder="Position"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.position}
                />
                <FormsyText
                    required
                    name="aboutWork"
                    placeholder="About Work"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.aboutWork}
                />
                <FormsyText
                    required
                    name="imageUrl"
                    placeholder="Image Url"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.imageUrl}
                />
                <FormsyText
                    name="facebook"
                    placeholder="Facebook Url"
                    validations="isExisty"
                    value={this.state.formData.facebook || ''}
                />
                <FormsyText
                    name="linkedin"
                    placeholder="Linkedin Url"
                    validations="isExisty"
                    value={this.state.formData.linkedin || ''}
                />
                <FormsyText
                    name="instagram"
                    placeholder="Instagram Url"
                    validations="isExisty"
                    value={this.state.formData.instagram || ''}
                />
            </ValidatableForm>
        )
    }
}