import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './style.scss';

export default class Uploader extends React.PureComponent{

    onChange = event => !this.props.disabled && this.props.onChange && this.props.onChange(event);

    render(){
        return(
            <div className="Uploader">
                <Fab color="primary" aria-label="Add" >
                    <AddIcon style={{ fill: '#fff' }}/>
                </Fab>
                <input
                    type="file"
                    onChange={this.props.onChange}
                    name={this.props.name}
                    accept={this.props.accept || '.jpg,.png,.jpeg'}
                    {...this.props.additionalInputProps}
                />
            </div>
        )
    }
}