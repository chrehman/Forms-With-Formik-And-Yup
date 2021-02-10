import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';

import {TextField} from '@material-ui/core'

interface FormFieldProps {
    label:string,
    name:string

}

const FormField:React.FC<FormFieldProps> = ({name,label}) => {
    return (
        <div>
          
        <Field as={TextField} name={name} label={label}
        helperText={ <ErrorMessage name={name} />
    }
        />
        </div>
    )
}

export default FormField