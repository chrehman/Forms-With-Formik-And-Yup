import { TextField } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'
import React from 'react'

const Form1 = () => {
    interface initialValuesType {
        firstName: string
        lastName: string,
        millionaire: boolean,
        money: number,
        description: string
    }
    const initialValues: initialValuesType = {
        firstName: '',
        lastName: '',
        millionaire: false,
        money: 0,
        description: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => { }}
        >
            <Form>
                <Field name='firstName' component={TextField} label="First Name" />
                <Field name='lastName' component={TextField} label="last Name" />
                <Field  component={CheckboxWithLabel} type="checkbox" name="millionaire" Label={{ label: 'Millionaire' }} />
                <Field name='money' type="number" component={TextField} label="All the money I have" />
                <Field name='description' component={TextField} label="Description" />
            </Form>
        </Formik>
    )
}

export default Form1
