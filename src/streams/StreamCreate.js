import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

 class StreamCreate extends Component {

  renderError({ error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
      </div>
      )
    }
  }

  renderInput= ({input, label, meta}) => {

    const className =`field ${meta.error && meta.touched ? 'error': ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"  />
        {this.renderError(meta)}
      </div>
    ) 
  }

  onSubmit(formValues) {
    console.log(formValues)
  }
  render() {
    return (
      <div>
        <form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="description" component={this.renderInput} label="Enter description"/>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = "You must enter a title";
  }

  if(!values.description) {
    errors.description ="You must enter a description"
  }
  return errors
}


export default  reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);


// return <input  
    // onChange={formProps.input.onChange}
    // value={formProps.input.value}
    // />