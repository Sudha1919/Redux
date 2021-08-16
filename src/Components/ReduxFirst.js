import React from 'react';
import { connect } from 'react-redux';

const ReduxFirst = props => {
  console.log(props.Employees[1]);
  console.log(props);
  return (
    <>
      <h1>First Redux Component : {props.Employees[{}]} </h1>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ReduxFirst);
