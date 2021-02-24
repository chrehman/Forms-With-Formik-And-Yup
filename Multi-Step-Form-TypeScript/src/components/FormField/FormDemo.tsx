import React from 'react'

import { Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography, Box, Button } from '@material-ui/core'
import { Field, Form, Formik, useField, ErrorMessage } from 'formik'
import { object, string, number, array, boolean, mixed } from 'yup'
interface formValues {
    fullName: string,
    initialInvestment: number,
    investmentRisk: string[],
    commentAboutInvestmentRisk: string,
    dependencies: number,
    acceptedTermsAndConditions: boolean

}
const initialValues: formValues = {
    fullName: '',
    initialInvestment: 0,
    investmentRisk: [],
    commentAboutInvestmentRisk: '',
    dependencies: -1,
    acceptedTermsAndConditions: false
};

const FormDemo = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">New Account</Typography>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values,formikHelpers) => (
                        new Promise(res =>{
                            setTimeout(() =>{
                                console.log(values)
                                console.log(formikHelpers)
                                res(values);
                            },5000)
                        })
                    )}
                    validationSchema={
                        object({
                            fullName: string().required('Your name is mandatory!!!').min(2).max(100),
                            initialInvestment: number().required().min(0).max(100),
                            dependencies: number().required().min(0).max(5),
                            acceptedTermsAndConditions: boolean().required().oneOf([true]),
                            investmentRisk: array(string().oneOf(['High', 'Medium', 'Low'])).min(1),
                            commentAboutInvestmentRisk: mixed().when('investmentRisk', {
                                is: (investmentRisk: string[]) => investmentRisk.find(item => item === 'High'),
                                then: string().required().min(20).max(100),
                                otherwise: string().min(20).max(100)
                            }
                            )
                        }
                        )
                    }

                >
                    {({ values, errors, touched,isSubmitting,isValidating }) => (
                        <Form>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="fullName" as={TextField} label="Full Name" helperText={<ErrorMessage name="fullName" />} />
                                    {/* {touched.fullName && errors.fullName ? errors.fullName:null} */}
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="initialInvestment" as={TextField} label="Initial Investment" type="number" helperText={<ErrorMessage name="initialInvestment" />} />
                                </FormGroup>
                            </Box>
                            {/* <Field name="investmentRisk" value="High" type="checkbox" />
                            <Field name="investmentRisk" value="Medium" type="checkbox" />
                            <Field name="investmentRisk" value="Low" type="checkbox" /> */}
                            <Box marginBottom={2}>
                                <label>Select the risk you want to take</label>
                                <FormGroup>
                                    <MyCheckBox name="investmentRisk" value="High" label="High-Super Risky" />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <MyCheckBox name="investmentRisk" value="Medium" label="Medium-Risky" />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <MyCheckBox name="investmentRisk" value="Low" label="Low-Safe" />
                                </FormGroup>

                            </Box>
                            <ErrorMessage name="investmentRisk" />
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="commentAboutInvestmentRisk" as={TextField} multiline rows={3} rowsMax={10} label="Comment About Investment Risk" helperText={<ErrorMessage name="commentAboutInvestmentRisk" />} />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="dependencies" as={TextField} select label="dependencies" helperText={<ErrorMessage name="dependencies" />}>
                                        <MenuItem value={-1}>Select ...</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Field>
                                </FormGroup>
                            </Box>
                            {/* <FormGroup>
                                <Field name="acceptedTermsAndConditions" type="checkbox" />
                            </FormGroup> */}
                            <FormGroup>
                                <MyCheckBox name="acceptedTermsAndConditions" label=" Accept terms and conditions" />
                                <ErrorMessage name="acceptedTermsAndConditions" />
                            </FormGroup>
                            <Button  variant="contained" color="primary" type="submit" disabled={isSubmitting || isValidating} >Submit</Button>
                            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
                            <pre>{JSON.stringify(values, null, 4)}</pre> */}
                            
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card >

    )
}

export default FormDemo

export interface MyCheckboxProps extends CheckboxProps {
    name: string;
    value?: string | number;
    label?: string

}

export function MyCheckBox(props: MyCheckboxProps) {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value
    })
    return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label} />
}