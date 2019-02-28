import React from 'react';

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import { LevelUpButton } from 'components/common';

export default class EditForm extends React.PureComponent{

    state = {
        data : {
            description: [],
            name: null,
            path: null,
            info: {
                duration: null,
                effort: null,
                price: null,
            },
            trainerInfo: []
        }
    };

    componentWillMount(){
        this.setState({ data: this.props.data.payload.data[0] })
    }

    generateDescription = () => (
        this.state.data.description.map((item, index) => (
            <FormsyText
                required
                key={index}
                name={`desc${index}`}
                label={index === 0 ? 'Description' : null}
                placeholder="Desc"
                validations="isExisty"
                validationError="Please fill*"
                value={item}
            />
        ))
    );

    generateTrainerInfo = () => (
        this.state.data.trainerInfo.map((item,index) => (
            <div key={`${index}0`}>
                <FormsyText
                    required
                    name={`trainer.name${index}`}
                    label={index === 0 ? 'Mentors Information' : null}
                    placeholder="Desc"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={item.name}
                />
                <FormsyText
                    required
                    name={`trainer.path${index}`}
                    placeholder="Desc"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={item.path}
                />
                <FormsyText
                    required
                    name={`trainer.position${index}`}
                    placeholder="Desc"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={item.position}
                />
                {!(index === this.state.data.trainerInfo.length - 1) && <hr/>}
            </div>
        ))
    );

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
        console.log("Log ::: this.state.data ::: ", this.state.data);
        return(
            <section className="EditForm flexible vertical aCenter">
                <ValidatableForm
                    onChange={this.props.onEditFormChange}
                    additionalFooterContent={this.generateAdditionalFooterContent()}
                    checkFormValidation={(isValid) => this.setState({ isValid })}
                >
                    <FormsyText
                        required
                        name="name"
                        label="Course Name"
                        placeholder="Course Name"
                        validations="isExisty"
                        validationError="Please fill*"
                        value={this.state.data.name}
                    />
                    <FormsyText
                        required
                        name="path"
                        label="Course Image Path"
                        placeholder="Course Image Path"
                        validations="isExisty"
                        validationError="Please fill*"
                        value={this.state.data.name}
                    />
                    <FormsyText
                        required
                        name="duration"
                        label="Course Duration"
                        placeholder="Course Duration"
                        validations="isExisty"
                        validationError="Please fill*"
                        value={this.state.data.info.duration}
                    />
                    <FormsyText
                        required
                        name="effort"
                        label="Course Effort"
                        placeholder="Course Effort"
                        validations="isExisty"
                        validationError="Please fill*"
                        value={this.state.data.info.effort}
                    />
                    <FormsyText
                        required
                        name="price"
                        label="Course Price"
                        placeholder="Course Price"
                        validations="isExisty"
                        validationError="Please fill*"
                        value={this.state.data.info.price}
                    />
                    {this.generateDescription()}
                    {this.generateTrainerInfo()}
                </ValidatableForm>
            </section>
        )
    }
}