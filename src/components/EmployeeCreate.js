import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, PurchaseButton } from './common';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends Component {

  buttonStyle = {
    color: 'red'
  };

  setThirdButton(button) {
  if (button.placement % 3 === 0 ) {
    button.color = 'red'
  }
}

  onButtonPress(){
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({name, phone, shift: shift || "Monday" });
  }

  render () {
    return (
      <Card>
      <EmployeeForm { ...this.props}
      />
        <CardSection>
          <PurchaseButton onPress={this.onButtonPress.bind(this)}>
            Create
          </PurchaseButton>
        </CardSection>

      </Card>
    );
  }
}



const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate})(EmployeeCreate);
