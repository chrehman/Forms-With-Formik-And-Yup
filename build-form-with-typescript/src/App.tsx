import React from 'react';
import './App.css';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { TextField } from '@material-ui/core';
import FormField from './components/FormField/FormField';
import FormDemo from './components/FormField/FormDemo';


interface formValues{
  firstName:string
}

function App() {
  
  const initialValues:formValues={
    firstName:""
  }

  const formValidation=Yup.object().shape({
    firstName:Yup.string()
    .min(2,'Name must have at least 2 characters')
    .required('Name is required')
  })

  const submitForm=(values:formValues):void=>{
      console.log(values)
  }

  return (
    <div className="">
      {/* <Formik
        initialValues={initialValues}   
        validationSchema={formValidation}
        onSubmit={submitForm}
      >
        <Form>
          <label htmlFor="firstName"> First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <ErrorMessage name="firstName" />
          <FormField name="firstName" label="First Name"/>
          <button  type="submit">Register</button>
        </Form>
      </Formik> */}
      {/* Multi Step Form */}

      <FormDemo/>

    </div>
  );

}

export default App;
