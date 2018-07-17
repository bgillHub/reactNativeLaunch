import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router >
    <Scene key="root">
        <Scene key ="auth">
          <Scene key="login" component={LoginForm} title= "Login" initial />
        </Scene>

        <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employees"
          component={EmployeeList}
          title= "Employees" />

          <Scene
          key="employeeCreate"
          component= {EmployeeCreate}
          title= "Create Employee"
          />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>
        </Scene>
    </Router>
  );
};

export default RouterComponent;
