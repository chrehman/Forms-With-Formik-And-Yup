import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const FormWithFormik = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0,
            email: ""
        },
        validationSchema: yup.object({
            name: yup.string()
                .max(15, "Name should be less than 15 characters")
                .required('Required'),
            age: yup.number()
                .max(60, "Age Should be lass than 60")
                .min(1, "Age should greater than 0")
                .required("Required"),
            email:yup.string()
            .required("Required")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values), null, 2)
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Enter Name</label>
                {/* <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                /> */}
                <input
                    id="name"
                    name="name"
                    type="text"
                   {...formik.getFieldProps('name')}
                />
                <div style={{ color: "red" }}>{formik.errors.name}</div>
                <label htmlFor="age">Enter Age</label>
                {/* <input
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                /> */}
                <input
                    id="age"
                    name="age"
                    type="number"
                   {...formik.getFieldProps('age')}
                />
                <div style={{ color: "red" }}>{formik.errors.age}</div>
                <label htmlFor="email">Enter Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <div style={{ color: "red" }}>{formik.errors.email}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default FormWithFormik
