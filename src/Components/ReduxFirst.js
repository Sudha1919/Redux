import React from 'react';
import { connect } from 'react-redux';

const ReduxFirst = props => {
  console.log(props.Employees[1]);
  console.log(props);
  return (
    <>
      <h1>First Redux Component :</h1>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
        </tr>
        {props.Employees.map(({ Name, Age, Designation }) => (
          <tr>
            <td>{Name}</td>
            <td> {Age}</td>
            <td>{Designation}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ReduxFirst);
