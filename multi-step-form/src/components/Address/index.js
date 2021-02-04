import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
const Address = ({setActiveStep,prevValues,setFormValues}) => {
    return (
        <Formik
            initialValues={prevValues}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values) => {
                
                setActiveStep(1);
                setFormValues({...values})
            }}
        >
            <Form>
                <Field name="firstName" type="text" as={TextField} label="First Name" color="Primary" required helperText={<div style={{color:"red"}}><ErrorMessage  name="firstName"/></div>} />
                <Field name="lastName" type="text" as={TextField} label="Last Name" color="Secondary" required helperText={<div style={{color:"red"}}><ErrorMessage  name="lastName"/></div>} />
                <Field name="email" type="email" as={TextField} label="Email" color="Secondary" required helperText={<div style={{color:"red"}}><ErrorMessage  name="email"/></div>} />

                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Form>
        </Formik>
    )
}

export default Address
