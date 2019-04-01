import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }


  renderRow() {
    return;
  }
  render() {
    console.log(this.props.employees);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={employee => <ListItem employee={employee.item} />}
        keyExtractor={employee => employee.uid}
      />


    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  console.log('lodash', state.employees);
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
