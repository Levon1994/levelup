import React from 'react';
import {connect} from "react-redux";
import moment from 'moment';

import {
    js,
    java,
    qa_automation,
    node_js,
} from '../../assets/courses';

import { fetchApplyers, deleteApplyer } from 'actions/apply-form.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const mapStateToProps = ({ applyers }) => ({ applyers });

@connect(mapStateToProps, {
    fetchApplyers,
    deleteApplyer,
})
export default class AdminApplyers extends React.PureComponent{

    componentDidMount(){
        this.props.fetchApplyers();
    }

    deleteRow = (id) => {
      this.props.deleteApplyer(id);
    };

    courseImages = {java, js, qa_automation, nodejs: node_js,};

    generateRowsData = () => {
        const rows = [];

        if(this.props.applyers) {
            this.props.applyers.payload.data.forEach((item) => {
                rows.push({
                    id: item._id,
                    name: item.name,
                    phone: item.phone,
                    age: item.age,
                    lang: item.lang,
                    course: item.course,
                    date: item.date,
                })
            })
        }

        return rows.length && rows.reverse().map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                    <div style={{
                        backgroundImage: `url(${this.courseImages[row.course]})`,
                        height: 40,
                        width: 50,
                        backgroundSize: 'contain',
                        borderRadius: 3,
                        backgroundColor: '#5c2be3',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}/>
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.lang}</TableCell>
                <TableCell align="right">{moment(row.date).format('DD/MM/YYYY , hh:mm:ss')}</TableCell>
                <TableCell align="right">
                    <IconButton  size="small" aria-label="Delete" onClick={() => this.deleteRow(row.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton >
                </TableCell>
            </TableRow>
        ));
    };

    render(){
        return (
            <div className="AdminApplyers page-content flexible vertical aCenter grow">
                <h2 className="header-text flexible vertical">View Applyers<div className="divider"/></h2>
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Course</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Lang</TableCell>
                                <TableCell align="right">Delete</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.generateRowsData().length && this.generateRowsData()}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}