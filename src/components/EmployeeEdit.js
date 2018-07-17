import React, {Component} from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, PurchaseButton, ConfirmModal } from './common';

class EmployeeEdit extends Component {

  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value});
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone,`Your shift: ${shift}`);
  }

  onFirePress() {
    this.setState({ showModal: !this.state.showModal});
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.setState({ showModal: !this.state.showModal});
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: !this.state.showModal});
  }


  render () {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <PurchaseButton onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </PurchaseButton>
        </CardSection>

        <CardSection>
          <PurchaseButton onPress={this.onTextPress.bind(this)} >
            Send Text
          </PurchaseButton>

          </CardSection>
          <CardSection>
          <PurchaseButton onPress={this.onFirePress.bind(this)} >
            Fire Employee
          </PurchaseButton>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this person?
        </ConfirmModal>

      </Card>
    );
  }
}
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete } )(EmployeeEdit);
