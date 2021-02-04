import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
const Card = ({ setActiveStep, setFormValues, prevValues }) => {

    return (
        <Formik
            initialValues={prevValues}
            validationSchema={Yup.object({
                cardName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                cardNumber: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .min(6, "Must be Greater than 5 characters")
                    .required('Required'),

            })}
            onSubmit={(values) => {


                setActiveStep(2);
                setFormValues({ ...values, ...prevValues })
            }}
        >
            <Form>
                <Field name="cardName" type="text" as={TextField} label="Card Name" color="Primary" required helperText={<div style={{ color: "red" }}><ErrorMessage name="cardName" /></div>} />
                <Field name="cardNumber" type="text" as={TextField} label="Card Number" color="Secondary" required helperText={<div style={{ color: "red" }}><ErrorMessage name="cardNumber" /></div>} />
                <Button variant="contained" color="primary" type="submit">Submit</Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        // console.log("Press")
                        setActiveStep(0)
                    }}>Back</Button>
            </Form>
        </Formik>
    )
}

export default Card
