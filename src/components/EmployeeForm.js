import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';
class EmployeeForm extends Component {
  render() {
    return(
      <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="name"
          value={this.props.name}
          onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
        />
      </CardSection>

      <CardSection>
      <Input
        label="Phone"
        placeholder="555-5555"
        value={this.props.phone}
        onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
      />
      </CardSection>

      <CardSection>
      <Text style={styles.pickerText}>Day</Text>
        <Picker
          style= {{flex: 1, height: 30, paddingLeft: 15}}
          selectedValue={this.props.shift}
          onValueChange={shift => this.props.employeeUpdate({prop:'shift', value: shift})}
          >
          <Picker.Item label="Monday" value="Monday"/>
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday"/>
          <Picker.Item label="Thursday" value="Thursday"/>
          <Picker.Item label="Friday" value="Friday"/>

        </Picker>
      </CardSection>
      </View>
    );
  }
}
const styles = {
  pickerText: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
