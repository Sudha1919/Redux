import React from 'react';
import { connect } from 'react-redux';

const ReduxFirst = props => {
  console.log(props.Employees[0]);
  return <h1>First Redux Component : {props.Employees.map((data)=>{
    <span>{data[0]}</span>
  })} </h1>;
};


const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ReduxFirst);
