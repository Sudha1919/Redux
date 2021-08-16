import React from 'react';
import { connect } from 'react-redux';

const ReduxFirst = props => {
  console.log(props);
  return <h1>First Redux Component : {props.Name}</h1>;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ReduxFirst);
